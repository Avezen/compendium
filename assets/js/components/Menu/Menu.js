import * as React from 'react';
import {menuItems} from "../../constans/menu";
import {MenuItem} from "./MenuItem/MenuItem";


export const Menu = ({handleChange, menuItems}) => {

    return (
        <ul className={'menu'}>
            {menuItems.map((item, key) => (
                <MenuItem
                    key={key}
                    technology={item.label.toUpperCase()}
                    {...item}
                    onClick={handleChange}
                />
            ))}
        </ul>
    );

};
