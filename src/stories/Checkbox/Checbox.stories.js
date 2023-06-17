import React from 'react';
import MyCheckbox from 'components/Checkbox/Checkbox';
import { sizes, labelPlacements } from 'utils/constants';

export default {
    title: 'Components/Checkbox/Checkbox',
    component: MyCheckbox,
    argTypes: {
        row: { control: 'boolean' },
        size: {
            options: sizes,
        },
        labelPlacement: {
            options: labelPlacements
        }
    },
};

const Template = (args) => <div style={{ width: 'max-content' }}><MyCheckbox {...args} /></div>

export const Checkbox = Template.bind({});
Checkbox.args = {
    data: [{ label: "abc" }, { label: "cde" }, { label: "fgh", defaultChecked: true, disabled: true },
    ],
    row: false
};