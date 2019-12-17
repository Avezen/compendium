import React, {Component} from 'react';
import {FormattedMessage} from "react-intl";
import {withRouter} from "react-router-dom";
import {withHelmet} from "../components/HOC/withHelmet";
import {fetchSymfonyTree} from "../service/SymfonyTreeService";
import {withData} from "../components/HOC/withData";

class SymfonyPageBase extends Component {
    render() {
        const {data} = this.props;

        return (
            <div className={'symfony-page'}>
                <div className={'content'}>
                    <div className={'content--inner'}>
                        Hello symfony page!
                        <br/>
                        <FormattedMessage id="navigation.dashboard"/>
                        <br/>
                        {this.props.match.params.topic}
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
    (fetchData) => fetchSymfonyTree()
);
