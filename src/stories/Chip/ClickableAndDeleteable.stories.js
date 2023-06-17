import React from 'react';
import MyChip from 'components/Chip/Chip';
import Avatar from 'components/Avatar/Avatar';


export default {
    title: 'Components/Chip/Deleteable With Avatar',
    component: MyChip,
    argTypes: {
        onClick: {
            table: {
                disable: true
            }
        },
        icon: {
            table: {
                disable: true
            }
        },
        avatar: {
            type: 'symbol'
        },
    }
};

const Template = (args) => <MyChip {...args} />

export const DeleteableWithAvatar = Template.bind({});
DeleteableWithAvatar.args = {
    label: 'Deleteable With Avatar',
    avatar: <Avatar name="Arsalan Ali" src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" />,
    onClick: null,
    onDelete: () => { }
};