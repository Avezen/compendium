import React, {useState} from "react";
import logo from "../../assets/compendium.png";
import {Link} from 'react-router-dom';
import {Menu} from "../Menu/Menu";
import LoginForm from "../LoginForm/LoginForm";
import {isAuthenticated, logout} from "../../service/Api";

export const AppBar = ({menuItems, handleChange}) => {

    const [formOpen, setFormOpen] = useState(false);
    const [authenticated, setAuthenticated] = useState(isAuthenticated());

    return (
        <div
            className={'app-bar'}
        >
            <div className={'app-bar__logo-wrapper'}>
                <Link to={'/'}>
                    <img src={logo} alt={'logo'} width={160}/>
                </Link>
            </div>

            <nav>
                <Menu
                    menuItems={menuItems}
                    handleChange={handleChange}
                />
            </nav>

            {authenticated ?
                (
                    <div className={'app-bar__button-wrapper'}>
                        <button onClick={() => {logout(); setAuthenticated(false)}} className={'button button--login'}>
                    <span>
                        Log Out
                    </span>
                        </button>
                    </div>
                ): (
                <div className={'app-bar__button-wrapper'}>
                    <button onClick={() => setFormOpen(true)} className={'button button--login'}>
                    <span>
                        Log In
                    </span>
                    </button>
                </div>
                )
            }


            {formOpen && <LoginForm
                setAuthenticated={setAuthenticated}
                setFormOpen={setFormOpen}
            />}

        </div>
    );
};