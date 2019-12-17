import React from "react";
import logo from "../../assets/compendium.png";
import { Link } from 'react-router-dom';
import {Menu} from "../Menu/Menu";

export const AppBar = ({toggleLogo}) => {
    return (
        <div
            className={'app-bar'}
        >
            <div className={`app-bar__logo-wrapper${toggleLogo ? '--hidden' : ''}`}>
                <Link to={'/'}>
                    <img src={logo} alt={'logo'} width={160}/>
                </Link>
            </div>

            <nav>
                <Menu/>
            </nav>

            <div className={'app-bar__button-wrapper'}>
                <Link to={'/login'} className={'button button--login'}>
                    <span>
                        Log In
                    </span>
                </Link>
            </div>
        </div>
    );
};