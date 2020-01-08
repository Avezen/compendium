import React, {Component} from 'react';
import {AppBar} from "./AppBar/AppBar";
import {Navigation} from "./Navigation/Navigation";
import {
    fetchNavigationIfNeeded,
    invalidateMenuItem,
    selectMenuItem,
} from "../store/actions/fetchNavigation";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import * as PropTypes from "prop-types";
import {adminMenuItems, menuItems} from "../constans/menu";
import {fetchAuthenticatedUser} from "../store/actions/authentication";
import {isObjectEmpty} from "../helpers";
import {logout} from "../service/Api";


class PageWrapperBase extends Component {

    componentDidMount() {
        const {selectMenuItem, fetchNavigationIfNeeded, fetchAuthenticatedUser} = this.props;

        let selectedMenu = this.props.location.pathname.split('/')[1];

        selectMenuItem(selectedMenu);
        fetchNavigationIfNeeded(selectedMenu);
        fetchAuthenticatedUser();
    }

    logoutUser = () => {
        const {fetchAuthenticatedUser} = this.props;
        logout().then(
            fetchAuthenticatedUser()
        );
    };

    handleChange = selectedMenu => {
        const {selectMenuItem, fetchNavigationIfNeeded} = this.props;

        selectMenuItem(selectedMenu);
        fetchNavigationIfNeeded(selectedMenu);
    };

    handleRefreshClick = (e) => {
        e.preventDefault();
        const {invalidateMenuItem, fetchNavigationIfNeeded, selectedMenu} = this.props;

        invalidateMenuItem(selectedMenu);
        fetchNavigationIfNeeded(selectedMenu);
    };



    render() {
        const {children, navigation, selectedMenu, authenticatedUser} = this.props;


        return (
            <React.Fragment>
                {authenticatedUser.user ? (
                    <MainLayout
                        appBar={
                            <AppBar
                                menuItems={adminMenuItems}
                                handleChange={this.handleChange}
                                authenticatedUser={authenticatedUser}
                                logoutUser={this.logoutUser}
                            />
                        }
                        navigation={
                            <Navigation
                                currentTree={selectedMenu}
                                navigationItems={navigation}
                            />
                        }
                        pageContent={children}
                    />
                ) : (
                    <MainLayout
                        appBar={
                            <AppBar
                                menuItems={menuItems}
                                handleChange={this.handleChange}
                                authenticatedUser={authenticatedUser}
                                logoutUser={this.logoutUser}
                            />
                        }
                        navigation={
                            <Navigation
                                currentTree={selectedMenu}
                                navigationItems={navigation}
                            />
                        }
                        pageContent={children}
                    />
                )}
            </React.Fragment>
        );
    }
}

const PageWrapperWithRouter = withRouter(PageWrapperBase);


const mapStateToProps = state => {
    const {selectedMenu, navigationByMenu, authenticatedUser} = state;
    const {isFetching, lastUpdated, items: navigation} = navigationByMenu[
        selectedMenu
        ] || {
        isFetching: true,
        items: []
    };

    return {
        selectedMenu,
        navigation,
        isFetching,
        lastUpdated,
        authenticatedUser
    }
};


const mapDispatchToProps = dispatch => {
    return {
        selectMenuItem: selectedMenu => dispatch(selectMenuItem(selectedMenu)),
        fetchNavigationIfNeeded: selectedMenu => dispatch(fetchNavigationIfNeeded(selectedMenu)),
        invalidateMenuItem: selectedMenu => dispatch(invalidateMenuItem(selectedMenu)),
        fetchAuthenticatedUser: () => dispatch(fetchAuthenticatedUser())
    };
};




export const PageWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(PageWrapperWithRouter);


PageWrapperBase.propTypes = {
    selectedMenu: PropTypes.string.isRequired,
    navigation: PropTypes.array,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number
};