import React from 'react';
import SudofyBreadcrumbs from './DummyComponent';

const data = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'About',
        href: '/about'
    },
    {
        label: 'Services',
        href: '/about/services'
    },
];

export default {
    title: 'Components/Breadcrumbs/Breadcrumbs',
    component: SudofyBreadcrumbs,
};

const Template = (args) => <SudofyBreadcrumbs {...args} />

export const Breadcrumbs = Template.bind({});
Breadcrumbs.args = {
    data: data
};