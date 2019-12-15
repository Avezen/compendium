import ReactDOM from 'react-dom';
import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect, Link
} from "react-router-dom";
import {DEFAULT_ROUTE, GLOBAL_ROUTES} from "./constans/routerConfig";
import {IntlProvider} from "react-intl";
import {flattenMessages} from "./helpers/flattenMessages";
import {messages} from "./constans/messages"
import {LOCALE} from "./constans/locales";
import {Main} from "./pages/Main";
import {About} from "./pages/About";
import {TransitionGroup, Transition} from "react-transition-group";
import {exit, play} from "./service/Animate";
import PageWrapper from "./components/PageWrapper";

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

            <IntlProvider locale={LOCALE.EN} messages={flattenMessages(messages[LOCALE.EN])}>
                <Router>
                    <PageWrapper>
                        <Route render={(location) => {
                            const {pathname, key} = location.location;

                            return (
                                <TransitionGroup component={null}>
                                    <Transition
                                        key={key}
                                        appear={true}
                                        onEnter={(node, appears) => play(pathname, node, appears)}
                                        onExit={(node, appears) => exit(node, appears)}
                                        timeout={{enter: 750, exit: 150}}
                                    >
                                        <Switch location={location.location}>
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
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));