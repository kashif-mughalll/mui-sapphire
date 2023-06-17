import React from 'react';
import GroupAvatar from 'components/AvatarGroup/AvatarGroup';
import { breakPoints } from 'utils/constants';

const usersData = [
    { id: '1', name: 'Remy Sharp', src: 'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg' },
    { id: '2', name: 'Travis Howard', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScOT-RdyXh3Rj66bIYic-F-47JLgOPnLe56A&usqp=CAU' },
    { id: '3', name: 'Cindy Baker', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-yfdxWGlvmsZrGLArkEyJzuUOF43G_UFIA&usqp=CAU' },
    { id: '4', name: 'Agnes Walker', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEwbEz0KUfiUe_ilmwzt5dSEvf72QErUHOw&usqp=CAU' },
    { id: '5', name: 'Trevor Henderson', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEwbEz0KUfiUe_ilmwzt5dSEvf72QErUHOw&usqp=CAU' },
    { id: '6', name: 'Remy Sharp', src: 'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg' },
    { id: '7', name: 'Travis Howard', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScOT-RdyXh3Rj66bIYic-F-47JLgOPnLe56A&usqp=CAU' },
    { id: '8', name: 'Cindy Baker', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-yfdxWGlvmsZrGLArkEyJzuUOF43G_UFIA&usqp=CAU' },
    { id: '9', name: 'Agnes Walker', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEwbEz0KUfiUe_ilmwzt5dSEvf72QErUHOw&usqp=CAU' },
    { id: '10', name: 'Trevor Henderson', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEwbEz0KUfiUe_ilmwzt5dSEvf72QErUHOw&usqp=CAU' },
    { id: '11', name: 'Agnes Walker', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEwbEz0KUfiUe_ilmwzt5dSEvf72QErUHOw&usqp=CAU' },
    { id: '12', name: 'Trevor Henderson', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEwbEz0KUfiUe_ilmwzt5dSEvf72QErUHOw&usqp=CAU' },
];

export default {
    title: 'Components/Avatar/Avatar Group',
    component: GroupAvatar,
    argTypes: {
        size: {
            type: 'select',
            options: breakPoints,
        },
        max: {
            type: 'number'
        },
        notifications: {
            table: {
                disable: true
            }
        }
    },
};

const Template = (args) => <GroupAvatar {...args} />

export const AvatarGroup = Template.bind({});
AvatarGroup.args = {
    users: usersData,
    max: 4
};