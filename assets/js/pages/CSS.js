import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {FormattedMessage} from "react-intl";
import {withHelmet} from "../components/HOC/withHelmet";

class CSSPageBase extends Component {
    render() {
        return (
                <div className={'css-page'}>
                    <div className={'content'}>
                        <div className={'content--inner'}>
                            Hello css page!
                            <br/>
                            <FormattedMessage id="navigation.dashboard"/>
                        </div>
                    </div>
                </div>
        );
    }
}

export const CSSPageWithHelmet = withHelmet(CSSPageBase);
export const CSS = withRouter(CSSPageWithHelmet);
