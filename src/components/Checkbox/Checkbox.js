import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MuiCheckbox from '@mui/material/Checkbox';
import { labelPlacements, sizes } from 'utils/constants';

const generateCheckbox = (data, checkboxProps) => {
    return data.map(({ defaultChecked, ...elemProps }, index) => <FormControlLabel key={index} {...checkboxProps} {...elemProps} control={<MuiCheckbox defaultChecked={defaultChecked} />} />);
}

const Checkbox = ({ data, size, labelPlacement, ...props }) => {
    return (
        <FormGroup {...props}>
            {generateCheckbox(data, { size, labelPlacement })}
        </FormGroup>
    );
};

Checkbox.propTypes = {
    data: PropTypes.array,
    size: PropTypes.oneOf(sizes),
    labelPlacement: PropTypes.oneOf(labelPlacements)
}

Checkbox.defaultProps = {
    data: [],
    size: 'medium',
    labelPlacement: 'end'
};

export default Checkbox;

