import React from 'react';
import PropTypes from 'prop-types';
import MuiButton from '@mui/material/Button';
import { buttonVariants, sizes } from 'utils/constants';

const Button = ({ startIcon, endIcon, text, children, ...props }) => {
    return (
        <MuiButton startIcon={startIcon} endIcon={endIcon} {...props}>{ children || text}</MuiButton>
    );
}

Button.propTypes = {
    variant: PropTypes.oneOf(buttonVariants),
    size: PropTypes.oneOf(sizes),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    text: PropTypes.string,
    children: PropTypes.node
}

export default Button;