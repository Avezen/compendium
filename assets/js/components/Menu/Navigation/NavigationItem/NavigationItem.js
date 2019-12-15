import * as React from 'react';
import { Link } from 'react-router-dom';

export const ListItemLink = ({ label, to, className}) => (
    <li>
        <Link to={to}>
            {label}
        </Link>
    </li>
);

