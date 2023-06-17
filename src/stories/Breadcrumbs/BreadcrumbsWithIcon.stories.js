import React from 'react';
import Breadcrumbs from './DummyComponent';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const dataWithIcon = [
  {
    label: 'Home',
    href: '/',
    icon: <HomeIcon />,
  },
  {
    label: 'About',
    href: '/about',
    icon: <InfoIcon />,
  },
  {
    label: 'Services',
    href: '/about/services',
    icon: <WhatshotIcon />,
  },
];

export default {
  title: 'Components/Breadcrumbs/Breadcrumbs With Icons',
  component: Breadcrumbs,
};

const Template = (args) => <Breadcrumbs {...args} />;

export const BreadcrumbsWithIcons = Template.bind({});
BreadcrumbsWithIcons.args = {
  data: dataWithIcon,
};
