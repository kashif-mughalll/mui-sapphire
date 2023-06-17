import React from 'react';
import Radio from 'components/RadioGroup/RadioGroup';
import { labelPlacements, sizes } from 'utils/constants';

export default {
    title: 'Components/Radio Group',
    component: Radio,
    argTypes: {
        row: { control: 'boolean' },
        size: {
            options: sizes,
        },
        labelPlacement: {
            options: labelPlacements
        }
    }
};

const Template = (args) => <Radio {...args} />

export const RadioGroup = Template.bind({});
RadioGroup.args = {
    data: [{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }, { value: 'other', label: 'Other', disabled: true }],
    row: false
};