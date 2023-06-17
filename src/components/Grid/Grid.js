import React from 'react';
import MuiGrid from '@mui/material/Grid';
import PropTypes from 'prop-types';

const Grid = ({ children, ...props }) => {
    return (
        <MuiGrid {...props}>
            {children}
        </MuiGrid>
    );
}

Grid.propTypes = {
    children: PropTypes.any
}

Grid.defaultProps = {
    children: null
}

export default Grid;