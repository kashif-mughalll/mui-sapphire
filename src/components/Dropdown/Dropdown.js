import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';

const Dropdown = ({ options, label, placeholder, value, onChange, helperText, required, disabled, error, ...props }) => {
    return (
        <FormControl {...{ required, disabled, error }}>
            <InputLabel shrink={true}>{label}</InputLabel>
            <Select
                displayEmpty
                value={value}
                label={label}
                onChange={onChange}
                renderValue={(value) => {
                    if (value?.length === 0) return placeholder;
                    const selectedOption = options.find(option => option?.value === value);
                    return (
                        <div style={{ display: 'flex', alignItems: 'center', overflow: 'hidden', width: '100%' }}>
                            {selectedOption?.avatar}
                            <span id='arsalan123' style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: selectedOption?.avatar ? 'calc(100% - 32px)' : '' }}>{selectedOption?.option}</span>
                        </div>
                    );
                }}
                {...props}
            >
                {placeholder && <MenuItem value='' sx={{ display: 'none' }} disabled>{placeholder}</MenuItem>}
                {options.map((item, index) => <MenuItem key={index} value={item.value} {...item.menuProps}> {item.avatar} {item.option}</MenuItem>)}
            </Select>
            {<FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    );
};

Dropdown.propTypes = {
    options: PropTypes.array.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    helperText: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    error: PropTypes.bool
}

Dropdown.defaultProps = {
    options: [],
    label: ' ',
    placeholder: null,
    value: '',
    onChange: () => false,
    helperText: null,
    required: false,
    disabled: false,
    error: false
}

export default Dropdown;