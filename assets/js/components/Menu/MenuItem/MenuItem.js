import * as React from 'react';
import {Link} from 'react-router-dom';

export const MenuItem = ({className, label, to, onClick, active}) => {

    return (
        <li>
            <Link
                to={to}
                className={className}
                onClick={() => {onClick(label)}}
                disabled={active}
            >
                <span>
                    {label}
                </span>
            </Link>
        </li>
    );
};


