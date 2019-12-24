import * as React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {useState} from "react";
import {createRef} from "react";
import {useEffect} from "react";
import * as ReactDOM from "react-dom";
import {Navigation, NavigationBase} from "../Navigation";


export const NavigationItemLinkBase = ({className, item, level, selected, setSelected, path, location}) => {
    const myRef = createRef();

    const {label, to} = item;

    useEffect(() => {
        if ('/symfony' + to === location.pathname) {
            if(JSON.stringify(selected) !== JSON.stringify(path)){
                setSelected(path);
            }
        }
    });

    return (
        <li className={`level-${level}`}>
            <Link
                to={'/symfony' + to}
                ref={myRef}
                onClick={() => {
                    setSelected(path);
                }}
            >
                <span>
                    {label}
                </span>
            </Link>
        </li>
    );

};

export const NavigationItemLink = withRouter(NavigationItemLinkBase);

