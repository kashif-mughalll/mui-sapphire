import React from 'react';
import MuiTooltip from '@mui/material/Tooltip';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({ children, ...props }) => {

    const RenderComponent = forwardRef((props, ref) => (
        <div {...props} ref={ref} style={{ width: 'fit-content', height: 'fit-content' }}>
            {children}
        </div>
    ));

    return (
        <MuiTooltip {...props}>
            {<RenderComponent />}
        </MuiTooltip>
    );
};

Tooltip.propTypes = {
    children: PropTypes.node
}

Tooltip.defaultProps = {
    children: null,
}

export default Tooltip;