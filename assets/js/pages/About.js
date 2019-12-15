import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {FormattedMessage} from "react-intl";
import {withHelmet} from "../components/HOC/withHelmet";

class AboutPageBase extends Component {
    render() {
        return (
                <div className={'about-page'}>
                    <div className={'content'}>
                        <div className={'content--inner'}>
                            Hello about page!
                            <br/>
                            <FormattedMessage id="navigation.dashboard"/>
                        </div>
                    </div>
                </div>
        );
    }
}

export const AboutPageWithHelmet = withHelmet(AboutPageBase);
export const About = withRouter(AboutPageWithHelmet);
