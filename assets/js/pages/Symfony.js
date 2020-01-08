import React, {Component} from 'react';
import {withHelmet} from "../components/HOC/withHelmet";
import {withData} from "../components/HOC/withData";
import {fetchPage} from "../service/Api";
import {darcula} from "react-syntax-highlighter/dist/esm/styles/prism";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {Col, Row} from "react-bootstrap";
import {isObjectEmpty} from "../helpers";
import {selectMenuItem} from "../store/actions/fetchNavigation";
import {connect} from "react-redux";


export class SymfonyPageBase extends Component {

    componentDidMount() {
        this.props.selectMenuItem('symfony')
    }


    render() {
        const {data, match} = this.props;

        return (
            <div className={'symfony-page'}>
                <div className={'content'}>
                    {!isObjectEmpty(data) ? (
                        <div className={'content--inner'}>
                            {/*<FormattedMessage id="navigation.dashboard"/>*/}
                            <br/>

                            <Row bsPrefix={'row m-0'}>
                                <Col lg={12}>
                                    <h1>
                                        {data.title}
                                    </h1>
                                </Col>
                                <Col lg={12}>
                                    <h3>
                                        {data.description}
                                    </h3>
                                </Col>
                                {data.files &&
                                    <Col lg={12}>
                                        <a href={`/api/download${this.props.match.url}`} target={'_blank'}>
                                            download
                                        </a>
                                    </Col>
                                }
                            </Row>

                            <br/>
                            {data.additionalContent && data.additionalContent.map((item, key) => (
                                <Row key={key} bsPrefix={'row m-0'}>
                                    <Col lg={6}>
                                        <h5>
                                            {key + 1}. {item.title}
                                        </h5>
                                        <br/>
                                        {item.description}
                                    </Col>
                                    <Col lg={6}>
                                        <SyntaxHighlighter language="php" style={darcula}>
                                            {item.code}
                                        </SyntaxHighlighter>
                                    </Col>
                                </Row>
                            ))}

                            <br/>
                            <br/>
                            {data.files &&
                            <Row bsPrefix={'row m-0'}>
                                <Col lg={12}>
                                    <h4>
                                        Files in package
                                    </h4>
                                </Col>
                                <br/>
                                <br/>
                                {Object.keys(data.files).map((item, key) => (
                                    <React.Fragment key={key}>
                                        <Col lg={6}>
                                            {item}
                                        </Col>
                                        <Col lg={6}>
                                            <SyntaxHighlighter language="php" style={darcula}>
                                                {data.files[item]}
                                            </SyntaxHighlighter>
                                        </Col>
                                    </React.Fragment>
                                ))}
                            </Row>
                            }
                        </div>
                    ) : (
                        <div className={'content--inner'}>
                            <Row bsPrefix={'row m-0'}>
                                <Col lg={12}>
                                    <br/>
                                    <h3>
                                        Missing data
                                    </h3>
                                </Col>
                            </Row>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}


export const SymfonyPageWithHelmet = withHelmet(SymfonyPageBase);

export const SymfonyWithData = withData(
    SymfonyPageWithHelmet,
    fetchPage
);

const mapDispatchToProps = dispatch => {
    return {
        selectMenuItem: selectedMenu => dispatch(selectMenuItem(selectedMenu)),
    };
};
export const Symfony = connect(null, mapDispatchToProps)(SymfonyWithData);

