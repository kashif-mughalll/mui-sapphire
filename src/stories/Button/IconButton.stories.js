import React from 'react';
import IconButton from 'components/IconButton/IconButton';
import { buttonVariants, sizes } from 'utils/constants';
import { ReactComponent as SudofyIcon } from 'assets/Sudofy.svg';

export default {
    title: 'Components/Button/Icon Button',
    component: IconButton,
    argTypes: {
        size: {
            options: sizes,
        },
        variant: {
            control: 'radio',
            options: buttonVariants,
        },
        icon: {
            type: 'symbol'
        }
    },
};

const Template = (args) => <IconButton {...args} />

export const Primary = Template.bind({});
Primary.args = {
    disabled: false,
    icon: <SudofyIcon />
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    disabled: false,
    icon: <SudofyIcon />
};