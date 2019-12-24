import * as React from 'react';

import {NavigationItem} from '../../containers/NavigationItem';
import {useState} from "react";
import {useEffect} from "react";

export const Navigation = ({navigationItems}) => {
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        setSelected([])
    }, [navigationItems]);

    return (
        <ul className={'navigation'}>
            {navigationItems && navigationItems.map((item, key) => (
                <NavigationItem
                    key={key}
                    level={0}
                    selected={selected}
                    setSelected={setSelected}
                    item={item}
                />
            ))}
        </ul>
    );

};
