import React from 'react';
import Text from 'components/Typography/Typography';
import { typographyVariants, typographyFonts } from 'utils/constants';
import colors from 'utils/colors';

export default {
    title: 'Components/Typography',
    component: Text,
    argTypes: {
        color: { control: 'color' },
        variant: {
            options: typographyVariants,
        },
        fontFamily: {
            control: 'radio',
            options: typographyFonts,
        }
    },
};

const Template = (args) => <Text {...args} />

export const Typography = Template.bind({});
Typography.args = {
    children: 'This is an example text...',
    variant: 'body1',
    fontFamily: 'poppins',
    color: colors.greyText[900]
};