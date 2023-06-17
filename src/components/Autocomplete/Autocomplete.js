import React from 'react';
import TextField from '@mui/material/TextField';
import MuiAutocomplete from '@mui/material/Autocomplete';
import PropTypes from 'prop-types';

const Autocomplete = ({ label, required, error, helperText, data, placeholder, ...props }) => {
    const disabledItems = data.filter(item => item.disabled)
    return (
        <MuiAutocomplete
            options={data}
            getOptionDisabled={option => disabledItems.indexOf(option) !== -1}
            renderInput={(params) => <TextField {...{ ...params, label, required, error, helperText, placeholder }} />}
            {...props}
        />
    );
};

Autocomplete.propTypes = {
    label: PropTypes.string,
    helperText: PropTypes.string,
    data: PropTypes.array,
    required: PropTypes.bool,
    error: PropTypes.bool,
    placeholder: PropTypes.string
}

Autocomplete.defaultProps = {
    label: ' ',
    helperText: null,
    data: [],
    required: false,
    error: false,
    placeholder: null
}

export default Autocomplete;