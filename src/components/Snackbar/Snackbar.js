import React from "react";
import MuiSnackbar from "@mui/material/Snackbar";
import PropTypes from 'prop-types';

const Snackbar = ({ children, ...props }) => (
    <MuiSnackbar {...props}>
        {children}
    </MuiSnackbar>
);

Snackbar.propTypes = {
    children: PropTypes.node
}

Snackbar.defaultProps = {
    children: null
}

export default Snackbar;