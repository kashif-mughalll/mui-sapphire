import React from 'react';
import PropTypes from 'prop-types';
import MuiIconButton from '@mui/material/IconButton';
import { buttonVariants, sizes } from 'utils/constants';

const IconButton = ({ icon, ...props }) => {
    return (
        <MuiIconButton {...props}>{icon}</MuiIconButton>
    );
}

IconButton.propTypes = {
    variant: PropTypes.oneOf(buttonVariants),
    size: PropTypes.oneOf(sizes),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    icon: PropTypes.node
}

export default IconButton;