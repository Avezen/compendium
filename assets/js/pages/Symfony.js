import React, {Component} from 'react';
import {FormattedMessage} from "react-intl";
import {withRouter} from "react-router-dom";
import {withHelmet} from "../components/HOC/withHelmet";
import {withData} from "../components/HOC/withData";
import {fetchPostsIfNeeded, invalidateSubreddit, selectSubreddit} from "../store/actions/fetchNavigation";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchSymfony} from "../service/SymfonyService";

export class SymfonyPageBase extends Component {


    render() {
        const {data, match} = this.props;

        return (
            <div className={'symfony-page'}>
                <div className={'content'}>
                    <div className={'content--inner'}>
                        Hello symfony page!
                        <br/>
                        <FormattedMessage id="navigation.dashboard"/>
                        <br/>
                        {match.params.topic}
                    </div>
                </div>
            </div>
        );
    }
}



export const SymfonyPageWithHelmet = withHelmet(SymfonyPageBase);
export const SymfonyWithRouter = withRouter(SymfonyPageWithHelmet);



export const Symfony = withData(
    SymfonyWithRouter,
    (fetchData) => fetchSymfony()
);


