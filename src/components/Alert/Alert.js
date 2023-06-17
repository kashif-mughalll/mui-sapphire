import React from "react";
import MuiAlert from "@mui/material/Alert";
import PropTypes from 'prop-types';

const Alert = ({ children, ...props }) => {
    return (
        <MuiAlert {...props}>
            {children}
        </MuiAlert>);
};

Alert.propTypes = {
    children: PropTypes.node
}

Alert.defaultProps = {
    children: null
}

export default Alert;