import colors from "utils/colors";

const FormControlLabel = {
    styleOverrides: {
        root: {
            '&.MuiFormControlLabel-root': {
                width: 'max-content'
            },
            '.MuiFormControlLabel-label.Mui-disabled': {
                color: colors.greyText[80],
            }
        }
    },
    variants: [
        {
            props: { size: 'small' },
            style: {
                '.MuiFormControlLabel-label': {
                    fontSize: 12
                },
                'svg': {
                    fontSize: 16
                }
            },
        },
        {
            props: { size: 'medium' },
            style: {
                '.MuiFormControlLabel-label': {
                    fontSize: 16
                },
                'svg': {
                    fontSize: 24
                }
            },
        },
        {
            props: { size: 'large' },
            style: {
                '.MuiFormControlLabel-label': {
                    fontSize: 22
                },
                'svg': {
                    fontSize: 28
                }
            },
        },
    ]
}

export default FormControlLabel;