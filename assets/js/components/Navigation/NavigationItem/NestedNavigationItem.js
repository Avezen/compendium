import * as React from 'react';
import {useState} from "react";
import {NavigationItem} from "./NavigationItem";
import {useEffect} from "react";


export const NestedNavigationItem = ({className, label, to, nestedRoutes, level}) => {

    const [open, setOpen] = useState(false);

    return (
        <li className={`level-${level}`}>
            <button
                className={`nav-button`}
                onClick={() => {
                    setOpen(!open);
                }}
            >
                <span>
                    {label}
                </span>
            </button>
            <div
                className={`nested-routes ${open ? 'nested-routes--open' : ''} `}
            >
                <ul>
                    {nestedRoutes.map((item, key) => (
                        <NavigationItem
                            key={key}
                            label={item.label}
                            to={item.to}
                            nestedRoutes={item.nestedRoutes}
                            level={level}
                        />
                    ))}
                </ul>
            </div>
        </li>
    );


};


