import React from 'react';
import PropTypes from 'prop-types';
import MuiDrawer from "@mui/material/Drawer";
import { tooltipPlacements as drawerPlacements } from 'utils/constants';

const Drawer = ({ anchor, open, onClose, children, ...props }) => {
    return (
        <MuiDrawer {...{anchor, open, onClose, ...props}}>
            {children}
        </MuiDrawer>
    );
};

Drawer.propTypes = {
    anchor: PropTypes.oneOf(drawerPlacements),
    open: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.node
}

Drawer.defaultProps = {
    anchor: 'bottom',
    open: false,
    onClose: () => null,
    children: null
};

export default Drawer;

