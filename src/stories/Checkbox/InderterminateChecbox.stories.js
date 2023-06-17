import React from 'react';
import MyIndeterminateCheckbox from 'components/IndeterminateCheckbox/IndeterminateCheckbox';
import { sizes, labelPlacements } from 'utils/constants';
import colors from 'utils/colors';

export default {
    title: 'Components/Checkbox/Indeterminate Checkbox',
    component: MyIndeterminateCheckbox,
    argTypes: {
        size: {
            options: sizes,
        },
    }
};

const Template = (args) => <MyIndeterminateCheckbox {...args} />

export const IndeterminateCheckbox = Template.bind({});
IndeterminateCheckbox.args = {
    data: [
        {
            label: 'Parent 1',
            direction: 'column',
            children: [
                { label: 'P1 C1', checked: false, disabled: true },
                { label: 'P1 C2', checked: false },
                { label: 'P1 C3', checked: false },
            ]
        },
        {
            label: 'Parent 2',
            children: [
                { label: 'P2 C1', checked: true },
                { label: 'P2 C2', checked: false },
                { label: 'P2 C3', checked: false },
            ]
        }
    ]
};