import React from 'react';
import Input from 'components/Input/Input';

export default {
    title: 'Components/Input/With Button',
    component: Input,
    argTypes: {
        type: {
            table: {
                disable: true
            }
        },
        characterLimit: {
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
        icon: {
            table: {
                disable: true
            }
        },
        error: {
            table: {
                disable: true
            }
        },
    },
};

const Template = (args) => <Input {...args} />

export const WithButton = Template.bind({});
WithButton.args = {
    type: 'button',
    label: 'Input With Button',
    placeholder: 'Enter text here',
    disabled: false,
    required: false,
    onClick: (value) => { console.log(value) }
};