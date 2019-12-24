import React, {Component} from 'react';



class MainLayout extends Component {
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
        const {appBar, navigation, pageContent} = this.props;
        const {menuToggle, isMobile} = this.state;

        return (
            <div className={'main-layout'}>
                <header
                    className={`main-layout__app-bar ${isMobile ? 'logo--hidden' :''}`}
                >
                    {appBar}
                </header>
                <nav
                    className={`main-layout__navigation ${menuToggle ? 'open' : 'close'}`}
                >
                    {navigation}
                </nav>
                <main
                    className={`main-layout__content nav-${menuToggle ? 'open' : 'close'} ${isMobile ? 'mobile' : ''}`}
                >
                    <div
                        className={`app-content`}
                    >
                        {pageContent}
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

export default MainLayout;
