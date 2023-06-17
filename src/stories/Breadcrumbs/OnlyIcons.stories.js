import React from 'react';
import Breadcrumbs from './DummyComponent';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const dataWithIcon = [
  {
    href: '/',
    icon: <HomeIcon />,
  },
  {
    href: '/about',
    icon: <InfoIcon />,
  },
  {
    href: '/about/services',
    icon: <WhatshotIcon />,
  },
];

export default {
  title: 'Components/Breadcrumbs/Only Icons',
  component: Breadcrumbs,
};

const Template = (args) => <Breadcrumbs {...args} />;

export const OnlyIcons = Template.bind({});
OnlyIcons.args = {
  data: dataWithIcon,
};
