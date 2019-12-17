import * as React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {useState} from "react";
import {createRef} from "react";
import {useEffect} from "react";
import * as ReactDOM from "react-dom";
import {Navigation, NavigationBase} from "../Navigation";


export const NavigationItemLinkBase = ({className, label, to, location}) => {
    const myRef = createRef();

    useEffect(() => {
        if ('/symfony' + to === location.pathname) {
            focusCurrentNavigationTree();
        }
    });

    const focusParentNavButton = (child) => {
        let parentDiv = child.closest("div");
        parentDiv.classList.add('nested-routes--open');
        let navButton = parentDiv.previousSibling;

        if (navButton){
            navButton.classList.add('selected');
            return navButton;
        }else{
            return null;
        }
    };

    const focusCurrentNavigationTree = () => {
        let navButtons = document.getElementsByClassName('nav-button');

        navButtons.forEach((button)=>{
            button.classList.remove('selected')
        });

        if (myRef.current) {
            let upperNavButton = focusParentNavButton(myRef.current);

            do {
                upperNavButton = focusParentNavButton(upperNavButton);
            }while(upperNavButton !== null);
        }

    };

    return (
        <li>
            <Link
                to={'/symfony' + to}
                ref={myRef}
                onClick={() => focusCurrentNavigationTree()}
            >
                    <span>
                        {label}
                    </span>
            </Link>
        </li>
    );

};

export const NavigationItemLink = withRouter(NavigationItemLinkBase);

