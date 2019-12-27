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
import {cutToFirstOccurrence} from "../helpers";


class PageWrapperBase extends Component {

    componentDidMount() {
        const {dispatch} = this.props;

        let initSelectedMenu = this.props.location.pathname.replace('/', '');
        initSelectedMenu = cutToFirstOccurrence(initSelectedMenu, '/');

        dispatch(selectMenuItem(initSelectedMenu));
        dispatch(fetchNavigationIfNeeded(initSelectedMenu));
    }

    handleChange = (menuItem) => {
        const {dispatch} = this.props;

        dispatch(selectMenuItem(menuItem));
        dispatch(fetchNavigationIfNeeded(menuItem));
    };

    handleRefreshClick = (e) => {
        e.preventDefault();
        const {dispatch, selectedMenu} = this.props;

        dispatch(invalidateMenuItem(selectedMenu));
        dispatch(fetchNavigationIfNeeded(selectedMenu));
    };


    render() {
        const {children, navigation, selectedMenu} = this.props;

        return (
            <MainLayout
                appBar={<AppBar handleChange={this.handleChange}/>}
                navigation={<Navigation currentTree={selectedMenu} navigationItems={navigation}/>}
                pageContent={children}
            />
        );
    }
}

const PageWrapperWithRouter = withRouter(PageWrapperBase);

function mapStateToProps(state) {
    const {selectedMenu, navigationByMenu} = state;
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
        lastUpdated
    }
}

export const PageWrapper = connect(
    mapStateToProps
)(PageWrapperWithRouter);


PageWrapperBase.propTypes = {
    selectedMenu: PropTypes.string.isRequired,
    navigation: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
};