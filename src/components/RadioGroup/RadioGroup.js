import React from 'react';
import PropTypes from 'prop-types';
import Radio from 'components/Radio/Radio';
import MuiRadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { labelPlacements, sizes } from 'utils/constants';

const generateRadioButtons = (data, radioProps) => {
    return data.map((elemProps, index) => <FormControlLabel key={index} {...radioProps} {...elemProps} control={<Radio />} />);
}

const RadioGroup = ({ data, size, labelPlacement, ...props }) => {
    return (
        <MuiRadioGroup sx={{ width: 'max-content' }} {...props}>
            {generateRadioButtons(data, { size, labelPlacement })}
        </MuiRadioGroup>
    )
}

RadioGroup.propTypes = {
    data: PropTypes.array,
    size: PropTypes.oneOf(sizes),
    labelPlacement: PropTypes.oneOf(labelPlacements)
}

RadioGroup.defaultProps = {
    data: [],
    size: 'medium',
    labelPlacement: 'end'
};

export default RadioGroup;