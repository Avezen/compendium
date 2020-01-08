import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {FormattedMessage} from "react-intl";
import {withHelmet} from "../components/HOC/withHelmet";
import {exampleComponents} from "../constans/exampleComponents";
import {connect} from "react-redux";
import {fetchNavigationIfNeeded, selectMenuItem} from "../store/actions/fetchNavigation";

class ReactJSPageBase extends Component {

    componentDidMount() {
        this.props.selectMenuItem('react')
    }


    render() {
        const {data, match} = this.props;

        const SpecificStory = exampleComponents[match.params.topic];

        return (
                <div className={'react-page'}>
                    <div className={'content'}>
                        <div className={'content--inner'}>
                            Hello react page!
                            <br/>
                            <FormattedMessage id="navigation.dashboard"/>
                        </div>
                        {match.params.topic}

                        {match.params.topic && <SpecificStory/>}

                    </div>
                </div>
        );
    }
}

export const ReactJSPageWithHelmet = withHelmet(ReactJSPageBase);
export const ReactJSWithRouter = withRouter(ReactJSPageWithHelmet);

const mapDispatchToProps = dispatch => {
    return {
        selectMenuItem: selectedMenu => dispatch(selectMenuItem(selectedMenu)),
    };
};
export const ReactJS = connect(null, mapDispatchToProps)(ReactJSWithRouter);
