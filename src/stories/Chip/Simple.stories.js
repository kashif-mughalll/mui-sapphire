import React from 'react';
import MyChip from 'components/Chip/Chip';

export default {
    title: 'Components/Chip/Simple',
    component: MyChip,
    argTypes: {
        onDelete: {
            table: {
                disable: true
            }
        },
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
        },
    }
};

const Template = (args) => <MyChip {...args} />

export const Simple = Template.bind({});
Simple.args = {
    label: 'Simple',
    onClick: null,
    onDelete: null
};

