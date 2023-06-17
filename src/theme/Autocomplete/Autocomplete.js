import colors from "utils/colors";

const Autocomplete = {
    styleOverrides: {
        root: {
            borderRadius: 24,
            '& .MuiOutlinedInput-root': {
                borderRadius: 24,
                height: 48,
                fontSize: 14,
                padding: '0 36px 0 18px !important',
                'svg': {
                    color: colors.greyText[900]
                },
                'input': {
                    padding: '0 !important',
                    maxWidth: 'calc(100% - 16px)',
                    '::placeholder': {
                        color: colors.greyText[500],
                        opacity: 1
                    },
                },
                '& fieldset': {
                    borderColor: colors.greyText[900],
                    'legend span': {
                        display: 'none'
                    }
                },
                '&.Mui-focused fieldset': {
                    border: `1px solid ${colors.primary[500]}`,
                },
                '&.Mui-focused .MuiAutocomplete-popupIndicator svg': {
                    color: ` ${colors.primary[500]}`,
                },
                '&.Mui-disabled fieldset': {
                    border: `1px solid ${colors.greyText[300]}`,
                },
                '&.Mui-disabled input, &.Mui-disabled textarea, &.Mui-disabled .MuiIconButton-root, &.Mui-disabled svg': {
                    WebkitTextFillColor: colors.greyText[300],
                    color: colors.greyText[300],
                    backgroundColor: 'transparent'
                }
            },
            '& .MuiButtonBase-root': {
                backgroundColor: 'transparent',
                height: 28,
                width: 24,
                ':hover, :active': {
                    backgroundColor: 'transparent'
                }
            }
        },
        popper: {
            '& .MuiPaper-root': {
                '& [aria-selected|=true]': {
                    color: colors.primary[500],
                    backgroundColor: 'transparent !important',
                },
                // remove color on focus, by default focus kerta hai hover hatane pe bhi
                '.Mui-focused': {
                    backgroundColor: 'transparent !important',
                },
                '& .MuiAutocomplete-option:hover': {
                    backgroundColor: `${colors.greyText[20]} !important`
                }
            },
        },
    }

}

export default Autocomplete;