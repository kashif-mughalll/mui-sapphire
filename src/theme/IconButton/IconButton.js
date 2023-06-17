import colors from 'utils/colors';

const IconButton = {
    defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
        variant: 'primary',
        size: 'medium'
    },
    styleOverrides: {
        root: {
            textTransform: 'none',
            fontWeight: 600,
            boxSizing: 'border-box',
            padding: 0
        },

    },
    variants: [
        {
            props: { variant: 'primary' },
            style: {
                color: colors.secondary.main,
                backgroundColor: colors.primary[500],
                fill: 'currentColor',
                'svg path': {
                    fill: 'currentColor',
                },
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
                'svg path': {
                    fill: 'currentColor',
                },
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
                height: 36,
                width: 36,
                '.MuiSvgIcon-root, svg': {
                    height: 18,
                    width: 18,
                }
            },
        },
        {
            props: { size: 'medium' },
            style: {
                height: 48,
                width: 48,
                '.MuiSvgIcon-root, svg': {
                    height: 20,
                    width: 20
                }
            },
        },
        {
            props: { size: 'large' },
            style: {
                height: 60,
                width: 60,
                '.MuiSvgIcon-root, svg': {
                    height: 24,
                    width: 24
                }
            },
        }
    ],
}

export default IconButton;