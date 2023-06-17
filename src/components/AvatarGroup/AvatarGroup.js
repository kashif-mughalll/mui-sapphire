import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'components/Avatar/Avatar';
import MuiAvatarGroup from '@mui/material/AvatarGroup';
import { avatarColors } from 'utils/colors';
import { breakPoints } from 'utils/constants';

const generateUsersAvatars = (users) => {
    return users.map((user, index) => <Avatar sx={{ backgroundColor: avatarColors[index % avatarColors.length] }} key={user?.id} name={user?.name} src={user?.src} />);
}

const AvatarGroup = ({ max, users, size, ...props }) => {
    return (
        <MuiAvatarGroup max={max} size={size} {...props}>
            {generateUsersAvatars(users)}
        </MuiAvatarGroup>
    );
}

AvatarGroup.propTypes = {
    max: PropTypes.number,
    users: PropTypes.array,
    size: PropTypes.oneOf(breakPoints)
}

AvatarGroup.defaultProps = {
    max: 4,
    users: [],
    size: 'lg'
};

export default AvatarGroup;