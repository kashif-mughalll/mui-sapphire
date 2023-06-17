import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@mui/material/FormControlLabel';
import MuiSwitch from '@mui/material/Switch';
import { labelPlacements, sizes } from 'utils/constants';

const Switch = ({ size, label, labelPlacement, defaultChecked, disabled, ...props }) => {
    return (
        <FormControlLabel control={<MuiSwitch {...{ size, defaultChecked }} />} {...{ size, label, labelPlacement, disabled, ...props }} />
    );
}

Switch.propTypes = {
    size: PropTypes.oneOf(sizes),
    label: PropTypes.string,
    labelPlacement: PropTypes.oneOf(labelPlacements),
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool
}

Switch.defaultProps = {
    size: 'medium',
    label: '',
    labelPlacement: 'end',
    defaultChecked: false,
    disabled: false
}

export default Switch;