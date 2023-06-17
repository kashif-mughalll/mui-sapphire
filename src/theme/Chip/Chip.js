import colors from "utils/colors";

const Chip = {
    styleOverrides: {
        root: {
            border: 'none',
            fontSize: 14,
            backgroundColor: colors.primary[20],
            '&.MuiChip-clickable': {
                ':hover': {
                    backgroundColor: colors.primary[60]
                },
                ':active': {
                    backgroundColor: colors.primary[200],
                    boxShadow: 'none'
                }
            },
            '.MuiChip-deleteIcon': {
                color: colors.greyText[900],
                ':hover': {
                    color: colors.primary[500],
                },
                ':active': {
                    color: colors.primary[900],
                }
            },
            '.MuiChip-avatar': {
                color: colors.secondary.main
            },
            'svg': {
                height: 22,
                width: 22,
            }
            // if want to change color of icon in chip
            // '.MuiChip-icon': {
            //     color: colors.greyText[900]
            // },
        }
    },
}

export default Chip;