import React from 'react';
import MuiLink from '@mui/material/Link';
import PropTypes from 'prop-types';

const Link = ({ children, ...props }) => {
    return (
        <MuiLink color='primary' rel="noopener" {...props}>
            {children}
        </MuiLink>
    )
}

Link.propTypes = {
    children: PropTypes.string
}

Link.defaultProps = {
    children: ""
}

export default Link;