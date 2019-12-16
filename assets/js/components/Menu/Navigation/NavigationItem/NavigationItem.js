import * as React from 'react';
import { Link } from 'react-router-dom';

export const ListItemLink = ({ label, to}) => (
    <li>
        <Link to={to}>
            {label}
        </Link>
    </li>
);

