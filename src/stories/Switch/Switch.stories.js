import React from 'react';
import MySwitch from 'components/Switch/Switch';
import { labelPlacements, sizes } from 'utils/constants';

export default {
    title: 'Components/Switch',
    component: MySwitch,
    argTypes: {
        size: {
            options: sizes,
        },
        labelPlacement: {
            options: labelPlacements,
        }
    },
};

const Template = (args) => <MySwitch {...args} />

export const Switch = Template.bind({});
Switch.args = {
    label: 'Switch Button',
};