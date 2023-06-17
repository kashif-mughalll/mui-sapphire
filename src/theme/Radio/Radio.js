import colors from 'utils/colors';

const Radio = {
    styleOverrides: {
        root: {
            '&.MuiRadio-root': {
                ':hover': {
                    backgroundColor: 'transparent',
                    color: colors.primary[500]
                }
            },
            '&.MuiRadio-root.Mui-disabled': {
                color: colors.primary[80],
            }
        },
    },
}

export default Radio;