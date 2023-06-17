import React from 'react';
import MyChip from 'components/Chip/Chip';
import { ReactComponent as SudofyIcon } from 'assets/Sudofy.svg';


export default {
    title: 'Components/Chip/With Icon',
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
        avatar: {
            table: {
                disable: true
            }
        },
        icon: {
            type: 'symbol'
        },
    }
};

const Template = (args) => <MyChip {...args} />

export const WithIcon = Template.bind({});
WithIcon.args = {
    label: 'With Icon',
    icon: <SudofyIcon />,
    onClick: null,
    onDelete: null
};