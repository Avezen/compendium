import * as React from 'react';
import {navigationItems} from "../../constans/navigation";
import MenuLink from "../../containers/MenuLink";
import {MenuItem} from "./MenuItem/MenuItem";


export const Menu = ({handleChange}) => {

    return (
        <ul className={'menu'}>
            {navigationItems.map((item, key) => (
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
