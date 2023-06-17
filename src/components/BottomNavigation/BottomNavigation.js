import React from 'react';
import PropTypes from 'prop-types';
import MuiBottomNavigation from '@mui/material/BottomNavigation';

const BottomNavigation = ({ showLabels, value, onChange, children, ...props }) => {
    return (
        <MuiBottomNavigation {...{ showLabels, value, onChange, ...props }} >
            {children}
        </MuiBottomNavigation>
    );
}

BottomNavigation.propTypes = {
    showLabels: PropTypes.bool,
    value: PropTypes.number,
    onChange: PropTypes.func
}

BottomNavigation.defaultProps = {
    showLabels: false,
    value: 0,
    onChange: () => null
};

export default BottomNavigation;