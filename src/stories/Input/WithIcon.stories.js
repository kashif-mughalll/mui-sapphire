import React from 'react';
import Input from 'components/Input/Input';
import AccountCircle from '@mui/icons-material/AccountCircle';


export default {
    title: 'Components/Input/With Adornment',
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
        error: {
            table: {
                disable: true
            }
        },
        startAdornment: {
            type: 'symbol'
        },
        endAdornment: {
            type: 'symbol'
        }
    },
};

const Template = (args) => <Input {...args} />

export const WithAdornment = Template.bind({});
WithAdornment.args = {
    label: 'Username',
    placeholder: 'Enter username here',
    disabled: false,
    required: false,
    startAdornment: < AccountCircle />,
    endAdornment: 'USD'
};