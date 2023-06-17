import React from 'react';
import Button from 'components/Button/Button';
import { buttonVariants, sizes } from 'utils/constants';

export default {
    title: 'Components/Button/Text Button',
    component: Button,
    argTypes: {
        size: {
            options: sizes,
        },
        variant: {
            control: 'radio',
            options: buttonVariants,
        },
        children: {
            table: {
                disable: true
            }
        },
    },
};

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({});
Primary.args = {
    text: 'Let\'s Start',
    disabled: false
};

export const Secondary = Template.bind({});
Secondary.args = {
    text: 'Let\'s Start',
    disabled: false,
    variant: 'secondary'
};