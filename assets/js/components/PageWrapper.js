import React, {Component} from 'react';
import {Navigation} from "./Menu/Navigation/Navigation";


class PageWrapper extends Component {
    render() {
        const { children } = this.props;
        return (
            <React.Fragment>
                <div>
                    <Navigation/>
                </div>
                { children }
            </React.Fragment>
        );
    }
}

export default PageWrapper;