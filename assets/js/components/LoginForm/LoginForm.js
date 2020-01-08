import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import {login, removeSessionToken, setSessionToken} from "../../service/Api";
import {Transition, TransitionGroup} from "react-transition-group";
import {animateModal, exit, play} from "../../service/Animate";
import {fetchNavigationIfNeeded, invalidateMenuItem, selectMenuItem} from "../../store/actions/fetchNavigation";
import {fetchAuthenticatedUser} from "../../store/actions/authentication";
import {connect} from "react-redux";

class LoginForm extends Component {
    state = {
        email: 'user@user.com',
        password: 'useruser',
        isLoading: false,
        user: null,
        error: null
    };

    doAuthentication = () => {
        const {email, password} = this.state;

        this.setState(
            {isLoading: true, user: null},
            () =>
                login({
                    email,
                    password
                }).then(
                    this.onAuthenticationSuccess,
                    this.onAuthenticationFailure
                )
        );
    };

    onAuthenticationSuccess = ({data}) => {
        const user = (data.success || null);

        this.setState({user, isLoading: false}, () => {
            this.props.fetchAuthenticatedUser();

            setTimeout(() => {
                this.closeForm();
            }, 500);
        });

    };

    onAuthenticationFailure = ({response}) => {
        const error = (response.data.error || null);

        this.props.fetchAuthenticatedUser();
        this.setState({
            error,
            isLoading: false,
        });
    };

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };

    stopPropagation = e => {
        e.stopPropagation();
    };

    closeForm = () => {
        const {setFormOpen} = this.props;
        setFormOpen(false);
    };

    render() {
        const {email, password, isLoading, user, error} = this.state;

        return (
            <div
                className={'login-modal'}
                onClick={this.closeForm}
            >
                <div
                    className={'login-form'}
                    onClick={this.stopPropagation}
                >
                    <label
                        className={'login-form--close'}
                        onClick={this.closeForm}
                    >
                        x
                    </label>
                    <Form>
                        <Form.Group
                            controlId="formBasicEmail"
                        >
                            <Form.Label>
                                Email address
                            </Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                defaultValue={email}
                                onChange={this.handleChange('email')}
                            />
                            <Form.Text
                                className="text-muted"
                            >
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group
                            controlId="formBasicPassword"
                        >
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                defaultValue={password}
                                onChange={this.handleChange('password')}
                            />
                        </Form.Group>

                        {error && <p>
                            {error}
                        </p>}

                        <div
                            className={'login-form--button'}
                        >
                            <Button
                                variant="primary"
                                type="button"
                                onClick={this.doAuthentication}
                                style={{backgroundColor: user && 'green', transition: 'all 0.3s'}}
                            >
                                {isLoading ? '' : user ? 'Success!' : 'Submit'}
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {authenticatedUser} = state;

    return {
        authenticatedUser
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAuthenticatedUser: () => dispatch(fetchAuthenticatedUser())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);