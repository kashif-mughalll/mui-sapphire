import React from 'react';
import PropTypes from 'prop-types';
import MuiAvatar from "@mui/material/Avatar";
import Badge from '@mui/material/Badge';
import { breakPoints } from 'utils/constants';

const Avatar = ({ name, src, badgeContent, badgeProps, size, ...props }) => {
    return (
        <Badge badgeContent={badgeContent} {...badgeProps} size={size} overlap='circular'>
            <MuiAvatar alt={name} size={size} src={src} {...props} >{!(src) ? name[0] : null}</MuiAvatar>
        </Badge>
    );
}

Avatar.propTypes = {
    name: PropTypes.string.isRequired,
    src: PropTypes.string,
    badgeContent: PropTypes.number,
    badgeProps: PropTypes.object,
    size: PropTypes.oneOf(breakPoints)
}

Avatar.defaultProps = {
    name: "",
    src: undefined,
    badgeContent: 0,
    badgeProps: {},
    size: 'lg'
};

export default Avatar;