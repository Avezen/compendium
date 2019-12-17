import * as React from 'react';
import {Link} from 'react-router-dom';
import {useState} from "react";
import {NestedNavigationItem} from "./NestedNavigationItem";
import {NavigationItemLink} from "./NavigationItemLink";


export const NavigationItem = ({className, label, to, nestedRoutes, level}) => {

    if(nestedRoutes && nestedRoutes.length > 0){
        level++;

        return (
            <NestedNavigationItem
                label={label}
                to={to}
                nestedRoutes={nestedRoutes}
                level={level}
            />
        );
    }else{
        return (
            <NavigationItemLink
                label={label}
                to={to}
            />
        );

    }

};


