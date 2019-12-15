import React, {Component} from 'react';
import {FormattedMessage} from "react-intl";
import {withRouter} from "react-router-dom";
import {withHelmet} from "../components/HOC/withHelmet";

class MainPageBase extends Component {
    render() {
        return (
                <div className={'main-page'}>
                    <h1>
                        <div>
                            Hello main page!
                        </div>
                    </h1>
                    <br/>
                    <FormattedMessage id="navigation.dashboard"/>
                </div>
        );
    }
}

export const MainPageWithHelmet = withHelmet(MainPageBase);
export const Main = withRouter(MainPageWithHelmet);
