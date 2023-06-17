import React from 'react';
import { useState } from 'react';
import TextField from '../TextField/TextField';
import MuiIconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import styledComponent from 'components/styled/styled';
import colors from 'utils/colors';
import PropTypes from 'prop-types'

const VisibilityIcon = styledComponent(MuiIconButton, {
    color: colors.primary[500],
    backgroundColor: 'transparent',
    width: 'max-content',
    marginRight: 2,
    ':hover': { backgroundColor: 'transparent' }
});

const PasswordField = ({ visibility, InputProps, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <TextField
            InputProps={{
                endAdornment: (
                    visibility ?
                        <InputAdornment position="end">
                            <VisibilityIcon
                                aria-label="toggle-password-visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </VisibilityIcon>
                        </InputAdornment> : null
                ),
                ...InputProps
            }}
            {...props}
            type={showPassword ? 'text' : 'password'}
        />
    );
}

PasswordField.propTypes = {
    visibility: PropTypes.bool
}

PasswordField.defaultProps = {
    visibility: true
}

export default PasswordField;