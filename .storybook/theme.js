import { create } from '@storybook/theming';
import Logo from './sudofy-logo.svg';
import colors from '../src/utils/colors';

export default create({
    base: 'light',
    appBg: colors.primary[0],
    brandTitle: 'Sudofy Development Kit',
    brandUrl: 'https://sudofy.com',
    brandImage: Logo,
});