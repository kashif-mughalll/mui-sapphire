import React from 'react';
import Tooltip from 'components/Tooltip/Tooltip';
import IconButton from 'components/IconButton/IconButton';
import PuffinIcon from 'assets/icon.png';
import { tooltipPlacements } from 'utils/constants';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    placement: {
      control: 'select',
      options: tooltipPlacements,
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <Tooltip {...args} />;

export const Tooltip = Template.bind({});
Tooltip.args = {
  title: 'Puffin Tooltip',
  arrow: false,
  placement: 'right',
  children: <IconButton icon={<PuffinIcon />} variant='secondary' />,
};
