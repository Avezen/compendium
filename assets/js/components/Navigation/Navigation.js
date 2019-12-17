import * as React from 'react';

import {NavigationItem} from './NavigationItem/NavigationItem';

export const Navigation = ({navigationItems, location}) => {
    return (
        <ul className={'navigation'}>
            {navigationItems.map((item, key) => (
                <NavigationItem
                    key={key}
                    level={0}
                    {...item}
                />
            ))}
        </ul>
    );

};
