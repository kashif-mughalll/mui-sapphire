import React from 'react';
import Dropdown from './Dropdown';
import Chip from 'components/Chip/Chip';
import Box from "@mui/material/Box";
import PropTypes from 'prop-types';

const getSelectedOptions = (options, selected) => {
    return selected.map(selectedValue => (options.find(option => option.value === selectedValue)).option);
}

const generateChips = (selectedOptions) => {
    return (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {selectedOptions.map((value, index) => (
                <Chip key={index} label={value} />
            ))}
        </Box>
    );
}

const MultipleSelect = ({ onChange, value, chips, ...props }) => {
    return (
        <Dropdown
            multiple
            classes={{ multiple: (value.length && chips) ? 'multiple-box' : '' }}
            renderValue={(selected) => {
                const selectedOptions = getSelectedOptions(props.options, selected);
                if (selected.length === 0) return props.placeholder;
                else if (chips) return generateChips(selectedOptions);
                return selectedOptions.join(', ');
            }}
            value={value}
            onChange={onChange}
            {...props}
        />
    );
}

MultipleSelect.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.array,
    chips: PropTypes.bool
}

MultipleSelect.defaultProp = {
    onChange: () => false,
    value: [],
    chips: false
}

export default MultipleSelect;