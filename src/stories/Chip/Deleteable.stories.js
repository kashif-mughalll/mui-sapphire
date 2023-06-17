import React from 'react';
import MyChip from 'components/Chip/Chip';

export default {
    title: 'Components/Chip/Deleteable',
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
            table: {
                disable: true
            }
        }
    }
};

const Template = (args) => <MyChip {...args} />

export const Deleteable = Template.bind({});
Deleteable.args = {
    label: 'Deleteable',
    onDelete: () => { },
    onClick: null
};