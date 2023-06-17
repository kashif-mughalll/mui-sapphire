import colors from "utils/colors";

const Button = {
    defaultProps: {
        disableElevation: true,
        disableFocusRipple: true,
        disableRipple: true,
        variant: 'primary',
        size: 'medium'
    },
    styleOverrides: {
        root: {
            borderRadius: 40,
            textTransform: 'none',
            fontWeight: 600,
            boxSizing: 'border-box',
            'svg': {
                height: '100%',
                width: '100%'
            }
        },

    },
    variants: [
        {
            props: { variant: 'primary' },
            style: {
                color: colors.secondary.main,
                backgroundColor: colors.primary[500],
                fill: 'currentColor',
                '&:hover': {
                    backgroundColor: colors.greyText[900]
                },
                '&:active': {
                    backgroundColor: colors.primary[800]
                },
                '&:disabled': {
                    backgroundColor: colors.primary[80],
                    color: colors.secondary.main
                }
            },
        },
        {
            props: { variant: 'secondary' },
            style: {
                color: colors.primary[500],
                backgroundColor: colors.secondary.main,
                border: `1px solid ${colors.primary[500]}`,
                fill: 'currentColor',
                '&:hover': {
                    backgroundColor: `${colors.primary[500]}1f`
                },
                '&:active': {
                    backgroundColor: colors.primary[40],
                    border: `1px solid ${colors.primary[800]}`,
                    color: colors.primary[800]
                },
                '&:disabled': {
                    border: `1px solid ${colors.primary[80]}`,
                    color: colors.primary[80]
                }
            },
        },
        {
            props: { size: 'small' },
            style: {
                padding: '0px 24px',
                height: 36,
                fontSize: 12,
                '.MuiButton-startIcon, .MuiButton-endIcon': {
                    height: 18,
                    width: 18
                }
            },
        },
        {
            props: { size: 'medium' },
            style: {
                padding: '0px 32px',
                height: 48,
                fontSize: 14,
                '.MuiButton-startIcon, .MuiButton-endIcon': {
                    height: 20,
                    width: 20,
                }
            },
        },
        {
            props: { size: 'large' },
            style: {
                padding: '0px 60px',
                height: 60,
                fontSize: 18,
                '.MuiSvgIcon-fontSizeMedium, .MuiButton-startIcon, .MuiButton-endIcon': {
                    height: 24,
                    width: 24
                }
            },
        }
    ],
}

export default Button;