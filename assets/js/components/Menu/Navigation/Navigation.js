import * as React from 'react';

import {ListItemLink} from './NavigationItem/NavigationItem';
import {navigationItems} from "../../../constans/navigation";

export const Navigation = () => (
    <ul className={'navigation'}>
        {navigationItems.map(item => (
            <ListItemLink key={item.label} {...item} />
        ))}
    </ul>
);
