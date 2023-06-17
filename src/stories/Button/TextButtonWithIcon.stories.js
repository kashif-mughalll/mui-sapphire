import React from 'react';
import Button from 'components/Button/Button';
import { buttonVariants, sizes } from 'utils/constants';
import PuffinIcon from 'assets/icon.png';

export default {
  title: 'Components/Button/Text Button With Icon',
  component: Button,
  argTypes: {
    size: {
      options: sizes,
    },
    variant: {
      control: 'radio',
      options: buttonVariants,
    },
    startIcon: { control: 'boolean', type: 'symbol' },
    endIcon: { control: 'boolean', type: 'symbol' },
    children: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => {
  args.startIcon = args.startIcon && <PuffinIcon />;
  args.endIcon = args.endIcon && <PuffinIcon />;

  return <Button {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  text: "Let's Start",
  disabled: false,
  startIcon: true,
  endIcon: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Let's Start",
  variant: 'secondary',
  disabled: false,
  startIcon: true,
  endIcon: false,
};
