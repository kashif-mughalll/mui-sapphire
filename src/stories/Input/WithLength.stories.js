import React from 'react';
import Input from 'components/Input/Input';

export default {
    title: 'Components/Input/With Character Count',
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

export const WithCharacterCount = Template.bind({});
WithCharacterCount.args = {
    label: 'Text Field',
    placeholder: 'Enter text here',
    characterLimit: null,
    disabled: false,
    required: false,
};