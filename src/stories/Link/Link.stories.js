import React from 'react';
import MyLink from 'components/Link/Link';
import { typographyFonts } from 'utils/constants';

export default {
    title: 'Components/Link',
    component: MyLink,
    argTypes: {
        fontFamily: {
            type: 'select',
            options: typographyFonts,
        }
    },
};

const Template = (args) => <MyLink {...args} />

export const Link = Template.bind({});
Link.args = {
    children: 'This is Link',
    href: 'https://google.com',
    fontFamily: 'poppins'
};