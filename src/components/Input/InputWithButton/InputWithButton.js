import React from 'react';
import { useRef } from 'react';
import CusTextField from '../TextField/TextField';
import SearchIcon from '@mui/icons-material/Search';
import CusIconButton from 'components/IconButton/IconButton';
import styledComponent from 'components/styled/styled';

const InputComponent = styledComponent('div', (props) => ({
  display: 'flex',
  alignItems: 'end',
  width: props.width,
}));

const InputButton = styledComponent(CusIconButton, {
  borderRadius: '0 24px 24px 0',
});

const TextField = styledComponent(CusTextField, {
  '.MuiOutlinedInput-root': {
    borderRadius: '24px 0 0 24px',
    '& fieldset, &.Mui-focused fieldset,&.Mui-disabled fieldset': {
      borderRight: 'none',
    },
  },
});

const InputWithButton = ({ onClick, disabled, type, ...props }) => {
  const inputRef = useRef(null);

  return (
    <InputComponent width={props?.sx?.width}>
      <TextField ref={inputRef} disabled={disabled} {...props} />
      <InputButton
        disabled={disabled}
        icon={<SearchIcon />}
        onClick={() => onClick(inputRef.current)}
      />
    </InputComponent>
  );
};

export default InputWithButton;
