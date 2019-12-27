import * as React from 'react';
import {useState} from "react";
import {NavigationItem} from "../../../containers/NavigationItem";
import {useEffect} from "react";


export const NestedNavigationItem = ({className, item, level, selected, setSelected, path, currentTree}) => {

    const [open, setOpen] = useState(false);

    const {label, nestedRoutes} = item;

    useEffect(() => {
        if(selected[level-1] === item.id){
            setOpen(true);
        }else if (selected.length === 0){
            setOpen(false);
        }
    }, [selected]);

    return (
        <li className={`level-${level}`}>
            <button
                className={`nav-button ${open ? 'open' : ''} ${selected[level-1] === item.id ? 'selected' : ''}`}
                onClick={() => {
                    setOpen(!open);
                }}
            >
                <span>
                    {label}
                </span>
                <div className={'arrow'}>
                    <svg
                        focusable="false"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
                    </svg>
                </div>
            </button>
            <div
                className={`nested-routes ${open ? 'open' : ''} ${selected[level] === item.id ? 'selected' : ''}`}
            >
                <ul>
                    {nestedRoutes.map((item, key) => (
                        <NavigationItem
                            key={key}
                            item={item}
                            level={level}
                            selected={selected}
                            setSelected={setSelected}
                            currentPath={path}
                            currentTree={currentTree}
                        />
                    ))}
                </ul>
            </div>
        </li>
    );


};


