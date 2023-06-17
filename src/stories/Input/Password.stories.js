import React from 'react';
import Input from 'components/Input/Input';

export default {
    title: 'Components/Input/Password',
    component: Input,
    argTypes: {
        type: {
            table: {
                disable: true
            }
        },
        startAdornment: {
            table: {
                disable: true
            }
        },
        endAdornment: {
            table: {
                disable: true
            }
        },
        characterLimit: {
            table: {
                disable: true
            }
        },
        icon: {
            table: {
                disable: true
            }
        },
        error: {
            table: {
                disable: true
            }
        }
    },
};

const Template = (args) => <Input {...args} />

export const Password = Template.bind({});
Password.args = {
    type: 'password',
    label: 'Password Field',
    placeholder: 'Enter text here',
    visibility: true,
    disabled: false,
    required: false,
};