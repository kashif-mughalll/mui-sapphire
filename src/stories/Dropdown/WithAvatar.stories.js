import React, { useState } from 'react';
import SudofyDropdown from 'components/Dropdown/Dropdown';
import Avatar from 'components/Avatar/Avatar';

const options = [
    {
        option: 'One',
        value: 1,
        avatar: <Avatar size='xs' name={'Sample'} src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" />
    },
    {
        option: 'Two',
        value: 2,
        avatar: <Avatar size='xs' name={'Sample'} src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" />
    },
    {
        option: 'Three',
        value: 3,
        avatar: <Avatar size='xs' name={'Sample'} src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" />
    },
];

export default {
    title: 'Components/Dropdown/With Avatar',
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

export const WithAvatar = Template.bind({});
WithAvatar.args = {
    label: 'Dropdown',
    placeholder: 'Select an option',
    options: options,
    required: false,
    disabled: false,
    helperText: ''
};