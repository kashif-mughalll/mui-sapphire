import './App.css';
import { theme } from 'theme/theme';
import Autocomplete from 'components/Autocomplete/Autocomplete';
import Avatar from 'components/Avatar/Avatar';
import AvatarWithText from 'components/AvatarWithText/AvatarWithText';
import GroupAvatar from 'components/AvatarGroup/AvatarGroup';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import Button from 'components/Button/Button';
import IconButton from 'components/IconButton/IconButton';
import Checkbox from 'components/Checkbox/Checkbox';
import IndeterminateCheckbox from 'components/IndeterminateCheckbox/IndeterminateCheckbox';
import Chip from 'components/Chip/Chip';
import Dropdown from 'components/Dropdown/Dropdown';
import MultipleSelect from 'components/Dropdown/MultipleSelect';
import Input from 'components/Input/Input';
import Link from 'components/Link/Link';
import RadioGroup from 'components/RadioGroup/RadioGroup';
import Switch from 'components/Switch/Switch';
import Tabs from 'components/Tabs/Tabs';
import Tooltip from 'components/Tooltip/Tooltip';
import Typography from 'components/Typography/Typography';
import Grid from 'components/Grid/Grid';
import ConnectKit from 'components/ConnectKit/ConnectKit';
import styled from 'components/Styled/Styled';
import BottomNavigation from 'components/BottomNavigation/BottomNavigation';
import BottomNavigationAction from 'components/BottomNavigationAction/BottomNavigationAction';
import Drawer from 'components/Drawer/Drawer';
import Alert from 'components/Alert/Alert';
import Snackbar from 'components/Snackbar/Snackbar';

let getDefaultTheme = () => theme;

export {
  getDefaultTheme,
  Autocomplete,
  Avatar,
  GroupAvatar,
  AvatarWithText,
  Breadcrumbs,
  Button,
  IconButton,
  Checkbox,
  IndeterminateCheckbox,
  Chip,
  Dropdown,
  MultipleSelect,
  Input,
  Link,
  RadioGroup,
  Switch,
  Tabs,
  Tooltip,
  Typography,
  Grid,
  BottomNavigation,
  BottomNavigationAction,
  Drawer,
  Alert,
  Snackbar,
  ConnectKit,
  styled,
};
