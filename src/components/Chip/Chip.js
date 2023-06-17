import React from 'react';
import MuiChip from '@mui/material/Chip';
import PropTypes from 'prop-types';


const Chip = (props) => {
    return (
        <MuiChip variant='outlined' {...props} />
    );
}

Chip.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    onDelete: PropTypes.func,
    icon: PropTypes.node,
    avatar: PropTypes.node,
}

Chip.defaultProps = {
    label: "",
    onClick: undefined,
    onDelete: undefined,
    icon: null,
    avatar: null,
}

export default Chip;