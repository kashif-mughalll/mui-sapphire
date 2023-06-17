import React from 'react';
import SudofyTooltip from 'components/Tooltip/Tooltip';
import IconButton from 'components/IconButton/IconButton';
import { ReactComponent as SudofyIcon } from 'assets/Sudofy.svg';
import { tooltipPlacements } from 'utils/constants';

export default {
    title: 'Components/Tooltip',
    component: SudofyTooltip,
    argTypes: {
        placement: {
            control: 'select',
            options: tooltipPlacements,
        },
        children: {
            table: {
                disable: true
            }
        },
    }
};

const Template = (args) => <SudofyTooltip {...args} />

export const Tooltip = Template.bind({});
Tooltip.args = {
    title: 'Sudofy Tooltip',
    arrow: false,
    placement: 'right',
    children: <IconButton icon={<SudofyIcon />} variant='secondary' />,
};