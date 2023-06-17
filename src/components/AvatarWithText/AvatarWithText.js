import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'components/Avatar/Avatar';
import Typography from 'components/Typography/Typography';
import { breakPoints } from 'utils/constants';
import styledComponent from '../styled/styled';

const MainContainer = styledComponent('div', {
  display: 'flex',
  width: 'max-content',
  textAlign: 'left',
});

const UserInfoContainer = styledComponent('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '16px',
  justifyContent: 'space-between',
});

const AvatarWithText = ({
  name,
  email,
  src,
  size,
  nameProps,
  emailProps,
  ...props
}) => {
  return (
    <MainContainer>
      <Avatar name={name} src={src} size={size} {...props} />
      <UserInfoContainer>
        <Typography {...nameProps}>{name}</Typography>
        <Typography {...emailProps}>{email}</Typography>
      </UserInfoContainer>
    </MainContainer>
  );
};

AvatarWithText.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  src: PropTypes.string,
  size: PropTypes.oneOf(breakPoints),
  nameProps: PropTypes.object,
  emailProps: PropTypes.object,
};

AvatarWithText.defaultProps = {
  name: '',
  email: '',
  src: '',
  size: undefined,
  nameProps: {},
  emailProps: {},
};

export default AvatarWithText;
