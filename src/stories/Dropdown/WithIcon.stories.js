import React, { useState } from 'react';
import SudofyDropdown from 'components/Dropdown/Dropdown';
import { ReactComponent as SudofyIcon } from 'assets/Sudofy.svg';

const options = [
    {
        option: 'One',
        value: 1,
        avatar: <SudofyIcon />
    },
    {
        option: 'Two',
        value: 2,
        avatar: <SudofyIcon />
    },
    {
        option: 'Three',
        value: 3,
        avatar: <SudofyIcon />
    },
];

export default {
    title: 'Components/Dropdown/With Icon',
    component: SudofyDropdown,
    argTypes: {
        error: {
            table: {
                disable: true
            }
        },
        value: {
            table: {
                disable: true
            }
        },
        onChange: {
            table: {
                disable: true
            }
        },
    }
};

const Template = (args) => {
    const [value, setValue] = useState('');

    function handleChange(e) {
        setValue(e.target.value);
    }

    args.value = value;
    args.onChange = handleChange;
    return <SudofyDropdown {...args} />
}

export const WithIcon = Template.bind({});
WithIcon.args = {
    label: 'Dropdown',
    placeholder: 'Select an option',
    options: options,
    required: false,
    disabled: false,
    helperText: ''
};