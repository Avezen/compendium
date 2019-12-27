import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {FormattedMessage} from "react-intl";
import {withHelmet} from "../components/HOC/withHelmet";

class ReactJSPageBase extends Component {
    render() {
        const {data, match} = this.props;

        return (
                <div className={'react-page'}>
                    <div className={'content'}>
                        <div className={'content--inner'}>
                            Hello react page!
                            <br/>
                            <FormattedMessage id="navigation.dashboard"/>
                        </div>
                        {match.params.topic}

                    </div>
                </div>
        );
    }
}

export const ReactJSPageWithHelmet = withHelmet(ReactJSPageBase);
export const ReactJS = withRouter(ReactJSPageWithHelmet);
