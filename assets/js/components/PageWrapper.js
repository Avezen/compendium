import React, {Component} from 'react';
import {Navigation} from "./Menu/Navigation/Navigation";


class PageWrapper extends Component {
    state = {
        menuToggle: true,
        isMobile: false
    };


    componentDidMount() {
        this.toggleMobile();
        window.addEventListener('resize', this.toggleMobile);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.toggleMobile);
    }

    toggleMenu = () => {
        this.setState((prevState) => ({
            menuToggle: !prevState.menuToggle
        }));
    };

    toggleMobile = () => {
        const {isMobile} = this.state;

        if (isMobile && window.innerWidth >= 768) {
            this.setState({isMobile: false});
        } else if (!isMobile && window.innerWidth < 768) {
            this.setState({isMobile: true});
        }
    };

    render() {
        const {children} = this.props;
        const {menuToggle, isMobile} = this.state;

        return (
            <div className={'main-layout'}>
                <header
                    className={'main-layout__app-bar'} onClick={this.toggleMenu}
                >
                    header
                </header>
                <nav
                    className={`main-layout__navigation main-layout__navigation${menuToggle ? '--open' : '--close'}`}
                >
                    <Navigation/>
                </nav>
                <main
                    className={`main-layout__content main-layout__content--${menuToggle ? 'open' : 'close'} ${isMobile ? 'mobile' : ''}`}
                >
                    <div
                        className={`app-content`}
                    >
                        {children}
                    </div>
                    <div
                        className={'overlay'}
                    >
                    </div>
                </main>
            </div>
        );
    }
}

export default PageWrapper;