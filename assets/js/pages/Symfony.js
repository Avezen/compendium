import React, {Component} from 'react';
import {FormattedMessage} from "react-intl";
import {withRouter} from "react-router-dom";
import {withHelmet} from "../components/HOC/withHelmet";
import {withData} from "../components/HOC/withData";
import {fetchPage} from "../service/Api";
import {darcula} from "react-syntax-highlighter/dist/esm/styles/prism";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {Col, Row} from "react-bootstrap";



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

                        {data && data.files && Object.keys(data.files).map((item, key) => (
                            <Row key={key} bsPrefix={'row m-0'}>
                                <Col lg={6}>

                                </Col>
                                <Col lg={6}>
                                    <SyntaxHighlighter language="php" style={darcula}>
                                        {data.files[item]}
                                    </SyntaxHighlighter>
                                </Col>
                            </Row>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}


export const SymfonyPageWithHelmet = withHelmet(SymfonyPageBase);

export const Symfony = withData(
    SymfonyPageWithHelmet,
    fetchPage
);


