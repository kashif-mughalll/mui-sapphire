import { createTheme } from '@mui/material/styles';
import Palette from './Palette/Palette';
import Typography from './Typography/Typography';
import Button from './Button/Button';
import IconButton from './IconButton/IconButton';
import Avatar from './Avatar/Avatar';
import AvatarGroup from './AvatarGroup/AvatarGroup';
import Badge from './Badge/Badge';
import FormControlLabel from './FormControlLabel/FormControlLabel';
import Checkbox from './Checkbox/Checkbox';
import Radio from './Radio/Radio';
import TextField from './TextField/TextField';
import InputLabel from './InputLabel/InputLabel';
import InputAdornment from './InputAdornment/InputAdornment';
import Chip from './Chip/Chip';
import Select from './Select/Select';
import Paper from './Paper/Paper';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import Autocomplete from './Autocomplete/Autocomplete';
import Tooltip from './Tooltip/Tooltip';
import FormControl from './FormControl/FormControl';

export const theme = createTheme({
    palette: Palette,
    typography: Typography,
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiButton: Button,
        MuiIconButton: IconButton,
        MuiAvatar: Avatar,
        MuiAvatarGroup: AvatarGroup,
        MuiBadge: Badge,
        MuiFormControlLabel: FormControlLabel,
        MuiRadio: Radio,
        MuiTextField: TextField,
        MuiInputLabel: InputLabel,
        MuiInputAdornment: InputAdornment,
        MuiCheckbox: Checkbox,
        MuiChip: Chip,
        MuiSelect: Select,
        MuiPaper: Paper,
        MuiAutocomplete: Autocomplete,
        MuiTooltip: Tooltip,
        MuiBreadcrumbs: Breadcrumbs,
        MuiFormControl: FormControl
    }
});