import * as React from 'react';
import {Link} from 'react-router-dom';

export const MenuItem = ({className, label, to}) => {

    return (
        <li>
            <Link to={to} className={className}>
            <span>
                {label}
            </span>
            </Link>
        </li>
    );
};


