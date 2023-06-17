import React from 'react';
import MyAvatar from 'components/Avatar/Avatar';
import { breakPoints } from 'utils/constants';

export default {
    title: 'Components/Avatar/Avatar',
    component: MyAvatar,
    argTypes: {
        size: {
            type: 'select',
            options: breakPoints,
        }
    },
};

const Template = (args) => <MyAvatar {...args} />

export const Avatar = Template.bind({});
Avatar.args = {
    name: 'Arsalan Ali',
    src: 'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo='
};