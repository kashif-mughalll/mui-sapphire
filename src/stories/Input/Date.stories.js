import React from 'react';
import Input from 'components/Input/Input';

export default {
    title: 'Components/Input/Date',
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
        },
        placeholder: {
            table: {
                disable: true
            }
        },
    },
};

const Template = (args) => <Input {...args} />

export const Date = Template.bind({});
Date.args = {
    type: 'date',
    label: 'Date Input',
    disabled: false,
    required: false,
};