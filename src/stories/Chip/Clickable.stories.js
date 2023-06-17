import React from 'react';
import MyChip from 'components/Chip/Chip';

export default {
    title: 'Components/Chip/Clickable',
    component: MyChip,
    argTypes: {
        onDelete: {
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
            table: {
                disable: true
            }
        }
    }
};

const Template = (args) => <MyChip {...args} />

export const Clickable = Template.bind({});
Clickable.args = {
    label: 'Clickable',
    onClick: () => { },
    onDelete: null
};