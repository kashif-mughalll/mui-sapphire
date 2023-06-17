import React from 'react';
import Input from 'components/Input/Input';

export default {
    title: 'Components/Input/Multiline',
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

export const Multiline = Template.bind({});
Multiline.args = {
    label: 'Multiline Input',
    placeholder: 'Enter text here',
    multiline: true,
    disabled: false,
    required: false,
};