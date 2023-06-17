import React from 'react';
import MyTabs from 'components/Tabs/Tabs';

const tabsData = [
    { name: "Tab 1", content: "First content" },
    { name: "Tab 2", content: "second page" },
    { name: "Tab 3", content: "third page", disabled: true },
    { name: "Tab 4", content: "fourth page" },
];

export default {
    title: 'Components/Tabs',
    component: MyTabs,
};

const Template = (args) => <MyTabs {...args} />

export const Tabs = Template.bind({});
Tabs.args = {
    data: tabsData
};