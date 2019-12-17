import React, {Component} from 'react';
import {FormattedMessage} from "react-intl";
import {withRouter} from "react-router-dom";
import {withHelmet} from "../components/HOC/withHelmet";
import {fetchCategories} from "../service/CategoryService";
import {withData} from "../components/HOC/withData";

class MainPageBase extends Component {
    render() {
        const {data} = this.props;

        return (
            <div className={'home-page'}>
                <div>
                    Hello main page!
                </div>
                <br/>
                <FormattedMessage id="navigation.dashboard"/>
            </div>
        );
    }
}

export const MainPageWithHelmet = withHelmet(MainPageBase);
export const MainWithRouter = withRouter(MainPageWithHelmet);

export const Home = withData(
    MainWithRouter,
    (fetchData) => fetchCategories()
);
