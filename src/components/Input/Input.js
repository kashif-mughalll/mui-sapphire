import React from 'react';
import TextField from './TextField/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PasswordField from './PasswordField/PasswordField';
import InputWithButton from './InputWithButton/InputWithButton';
import PropTypes from 'prop-types';
import { inputTypes } from 'utils/constants';

const Input = ({ type, startAdornment, endAdornment, inputProps, characterLimit, ...props }) => {
    let InputComponent = null;

    switch (type) {
        case 'password':
            InputComponent = PasswordField;
            break;
        case 'button':
            InputComponent = InputWithButton;
            break;
        default:
            InputComponent = TextField;
    }

    return (
        <InputComponent
            {...{ type, characterLimit, ...props }}
            InputProps={{
                startAdornment: startAdornment && (
                    <InputAdornment position="start">
                        {startAdornment}
                    </InputAdornment>
                ),
                endAdornment: endAdornment && (
                    <InputAdornment position="end">
                        {endAdornment}
                    </InputAdornment>
                ),
                ...inputProps
            }}
        />
    );
}

Input.propTypes = {
    type: PropTypes.oneOf(inputTypes),
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    characterLimit: PropTypes.number,
    startAdornment: PropTypes.node,
    endAdornment: PropTypes.node,
    error: PropTypes.bool
}

Input.defaultProps = {
    type: null,
    label: ' ',
    placeholder: null,
    disabled: false,
    required: false,
    characterLimit: null,
    startAdornment: null,
    endAdornment: null,
    error: false
}

export default Input;