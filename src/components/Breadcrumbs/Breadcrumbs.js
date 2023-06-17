import React from 'react';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const generateBreadcrumbs = (data) => {
    return data.map((item, index) => <Link key={index} to={item.href}>{item.icon}{item.label && <span>{item.label}</span>}</Link>)
}

const Breadcrumbs = ({ data, ...props }) => {
    return (
        <MuiBreadcrumbs {...props}>
            {generateBreadcrumbs(data)}
        </MuiBreadcrumbs>
    );
};

Breadcrumbs.propTypes = {
    data: PropTypes.array
}

Breadcrumbs.defaultProps = {
    data: []
}

export default Breadcrumbs;