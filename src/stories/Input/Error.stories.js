import React from 'react';
import Input from 'components/Input/Input';

export default {
    title: 'Components/Input/Error',
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
        disabled: {
            table: {
                disable: true
            }
        }
    },
};

const Template = (args) => <Input {...args} />

export const Error = Template.bind({});
Error.args = {
    label: 'Text Field',
    placeholder: 'Enter text here',
    error: true,
    helperText: 'Error message here',
    required: false,
};