import * as React from 'react';
import {NestedNavigationItem} from "../components/Navigation/NavigationItem/NestedNavigationItem";
import {NavigationItemLink} from "../components/Navigation/NavigationItem/NavigationItemLink";


export const NavigationItem = ({className, item, level, selected, setSelected, currentPath, currentUrlPath, currentTree}) => {
    level++;

    let path = [];
    let urlPath = '';

    if (currentPath) {
        path = ([...currentPath, item.id]);
    } else {
        path.push(item.id);
    }

    if (currentUrlPath) {
        urlPath = currentUrlPath + item.to;
    } else {
        urlPath = item.to;
    }

    if (item.nestedRoutes && item.nestedRoutes.length > 0) {
        return (
            <NestedNavigationItem
                item={item}
                level={level}
                selected={selected}
                setSelected={setSelected}
                path={path}
                urlPath={urlPath}
                currentTree={currentTree}
            />
        );
    } else {
        return (
            <NavigationItemLink
                item={item}
                level={level}
                selected={selected}
                setSelected={setSelected}
                path={path}
                urlPath={urlPath}
                currentTree={currentTree}
            />
        );
    }
};


