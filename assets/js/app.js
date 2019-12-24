import ReactDOM from 'react-dom';
import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import {DEFAULT_ROUTE, GLOBAL_ROUTES, NESTED_ROUTES} from "./constans/routerConfig";
import {IntlProvider} from "react-intl";
import {flattenMessages} from "./helpers/flattenMessages";
import {messages} from "./constans/messages"
import {LOCALE} from "./constans/locales";
import {TransitionGroup, Transition} from "react-transition-group";
import {exit, play} from "./service/Animate";
import {store} from "./store";
import {Provider} from "react-redux";
import {PageWrapper} from "./components/PageWrapper";

class App extends Component {

    render() {
        const routeComponents = GLOBAL_ROUTES.map(
            ({Component, path, ...props}, key) =>
                <Route
                    key={key}
                    exact
                    path={path}
                    render={() => <Component {...props} />}
                />
        );

        return (
            <Provider store={store}>
                <IntlProvider locale={LOCALE.EN} messages={flattenMessages(messages[LOCALE.EN])}>
                    <Router>
                        <PageWrapper>
                            <Route
                                render={({location}) => {
                                    const {pathname, key} = location;

                                    return (
                                        <TransitionGroup component={null}>
                                            <Transition
                                                key={key}
                                                appear={true}
                                                onEnter={(node, appears) => play(pathname, node, appears)}
                                                onExit={(node, appears) => exit(node, appears)}
                                                timeout={{enter: 750, exit: 150}}
                                            >
                                                <Switch location={location}>
                                                    {routeComponents}
                                                </Switch>
                                            </Transition>
                                        </TransitionGroup>
                                    )
                                }}
                            />
                        </PageWrapper>
                    </Router>
                </IntlProvider>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));