import React from 'react';
import Breadcrumbs from './DummyComponent';

const data = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Services',
    href: '/about/services',
  },
];

export default {
  title: 'Components/Breadcrumbs/Breadcrumbs',
  component: Breadcrumbs,
};

const Template = (args) => <Breadcrumbs {...args} />;

export const Breadcrumbs = Template.bind({});
Breadcrumbs.args = {
  data: data,
};
