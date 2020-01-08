import React, {useState} from "react";
import logo from "../../assets/compendium.png";
import {Link} from 'react-router-dom';
import {Menu} from "../Menu/Menu";
import LoginForm from "../LoginForm/LoginForm";
import {isAuthenticated, logout} from "../../service/Api";

export const AppBar = ({menuItems, handleChange, authenticatedUser, logoutUser}) => {

    const [formOpen, setFormOpen] = useState(false);

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



            {authenticatedUser.isFetching ? (<div>loading</div>) : authenticatedUser.user ?
                (
                    <div className={'app-bar__button-wrapper'}>
                        <button onClick={() => {logoutUser()}} className={'button button--login'}>
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
                authenticatedUser={authenticatedUser}
                setFormOpen={setFormOpen}
            />}

        </div>
    );
};