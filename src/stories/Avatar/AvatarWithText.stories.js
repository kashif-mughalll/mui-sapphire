import React from 'react';
import TextAvatar from 'components/AvatarWithText/AvatarWithText';
import { breakPoints } from 'utils/constants';
import colors from 'utils/colors';

export default {
    title: 'Components/Avatar/Avatar With Text',
    component: TextAvatar,
    argTypes: {
        size: {
            type: 'select',
            options: breakPoints,
        },
    }
};

const Template = (args) => <TextAvatar {...args} />

export const AvatarWithText = Template.bind({});
AvatarWithText.args = {
    name: 'Arsalan Ali',
    email: 'arsalan.ali@sudofy.com',
    nameProps: { fontSize: 14, fontWeight: 600, color: colors.greyText[900] },
    emailProps: { fontSize: 14, color: colors.greyText[700] }
};