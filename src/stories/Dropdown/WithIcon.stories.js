import React, { useState } from 'react';
import Dropdown from 'components/Dropdown/Dropdown';
import PuffinIcon from 'assets/icon.png';

const options = [
  {
    option: 'One',
    value: 1,
    avatar: <PuffinIcon />,
  },
  {
    option: 'Two',
    value: 2,
    avatar: <PuffinIcon />,
  },
  {
    option: 'Three',
    value: 3,
    avatar: <PuffinIcon />,
  },
];

export default {
  title: 'Components/Dropdown/With Icon',
  component: Dropdown,
  argTypes: {
    error: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  args.value = value;
  args.onChange = handleChange;
  return <Dropdown {...args} />;
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Dropdown',
  placeholder: 'Select an option',
  options: options,
  required: false,
  disabled: false,
  helperText: '',
};
