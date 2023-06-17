import colors from 'utils/colors';

const TextField = {
    styleOverrides: {
        root: {
            width: '100%',
            '.MuiOutlinedInput-root': {
                borderRadius: 24,
                minHeight: 48,
                width: '100%',
                fontSize: 14,
                'input': {
                    padding: '0 18px',
                    '::placeholder': {
                        color: colors.greyText[500],
                        opacity: 1
                    },
                    '::-webkit-inner-spin-button': {
                        WebkitAppearance: 'none',
                        margin: 0
                    },
                },
                'input[type="password"]': {
                    fontSize: 16,
                    fontWeight: 700,
                    letterSpacing: -1,
                    height: 'auto',
                    '::placeholder': {
                        fontSize: 14,
                        fontWeight: 500,
                        letterSpacing: 0,
                    },
                },
                '& fieldset': {
                    borderColor: colors.greyText[900],
                    'legend span': {
                        display: 'none'
                    }
                },
                '&:hover fieldset': {},
                '&.Mui-focused fieldset': {
                    border: `1px solid ${colors.primary[500]}`,
                },
                '&.Mui-disabled fieldset': {
                    border: `1px solid ${colors.greyText[300]}`,
                },
                '&.Mui-disabled input, &.Mui-disabled textarea': {
                    WebkitTextFillColor: colors.greyText[300]
                },
                '&.Mui-disabled svg': {
                    color: colors.greyText[300]
                },
            },
            '.MuiOutlinedInput-root.MuiInputBase-adornedEnd input.MuiOutlinedInput-input': {
                paddingRight: 0
            },
            '.MuiOutlinedInput-root.MuiInputBase-adornedStart input.MuiOutlinedInput-input': {
                paddingLeft: 0
            },
            '.MuiOutlinedInput-root.MuiInputBase-multiline': {
                height: '100%',
                padding: '14px 18px',
                'textarea': {
                    cursor: 'auto',
                    '::placeholder': {
                        color: colors.greyText[500],
                        opacity: 1
                    },
                    '&::-webkit-scrollbar': {
                        width: '6px'
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: colors.greyText[80],
                        borderRadius: 6,
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: colors.greyText[400],
                        outline: 'none',
                        borderRadius: 6,
                    },
                }
            }
        },
    },
}

export default TextField;