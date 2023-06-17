import React from 'react';
import Button from 'components/Button/Button';
import { buttonVariants, sizes } from 'utils/constants';
import { ReactComponent as SudofyIcon } from 'assets/Sudofy.svg';

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
                disable: true
            }
        },
    },
};

const Template = (args) => {
    args.startIcon = args.startIcon && <SudofyIcon />
    args.endIcon = args.endIcon && <SudofyIcon />

    return <Button {...args} />
}

export const Primary = Template.bind({});
Primary.args = {
    text: 'Let\'s Start',
    disabled: false,
    startIcon: true,
    endIcon: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
    text: 'Let\'s Start',
    variant: 'secondary',
    disabled: false,
    startIcon: true,
    endIcon: false,
};