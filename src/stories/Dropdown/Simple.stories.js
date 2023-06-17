import { useState } from 'react';
import Dropdown from 'components/Dropdown/Dropdown';

const dropdownOptions = [
  {
    option: 'Monday',
    value: 1,
  },
  {
    option: 'Tuesday',
    value: 2,
  },
  {
    option: 'Wednesday',
    value: 3,
  },
  {
    option: 'Thursday',
    value: 4,
  },
  {
    option: 'Friday',
    value: 5,
  },
  {
    option: 'Saturday',
    value: 6,
  },
  {
    option: 'Sunday',
    value: 7,
  },
];

export default {
  title: 'Components/Dropdown/Simple',
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

export const Simple = Template.bind({});
Simple.args = {
  label: 'Dropdown',
  placeholder: 'Select an option',
  options: dropdownOptions,
  required: false,
  disabled: false,
  helperText: '',
};
