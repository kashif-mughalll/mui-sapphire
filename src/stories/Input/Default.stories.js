import React from 'react';
import Input from 'components/Input/Input';

export default {
    title: 'Components/Input/Text',
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

export const Text = Template.bind({});
Text.args = {
    label: 'Text Field',
    placeholder: 'Enter text here',
    helperText: 'Don\'t use special characters',
    disabled: false,
    required: false,
};