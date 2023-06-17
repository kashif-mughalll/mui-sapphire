import colors from "utils/colors";

const Checkbox = {
    styleOverrides: {
        root: {
            '&.MuiCheckbox-root': {
                ':hover': {
                    backgroundColor: 'transparent',
                    color: colors.primary[500] 
                }
            },
            '&.MuiCheckbox-root.Mui-disabled': {
                color: colors.primary[80],
            },
        }
    }
}

export default Checkbox;