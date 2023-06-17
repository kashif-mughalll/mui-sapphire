import colors from "utils/colors";

const Select = {
    styleOverrides: {
        root: {
            '&.MuiOutlinedInput-root': {
                borderRadius: 24,
                width: 'auto',
                fontSize: 14,
                color: colors.greyText[900],
                'svg, .MuiAvatar-root': {
                    height: '20px',
                    width: '20px',
                    marginRight: '10px'
                },
                '.MuiSelect-iconOutlined': {
                    height: 24,
                    width: 24,
                    color: colors.greyText[900],
                    margin: 0
                },
                '.MuiSelect-outlined': {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    borderRadius: 24,
                    lineHeight: 3.5,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'start',
                    padding: '0 18px',
                },
                '.MuiSelect-multiple': {
                    display: 'block',
                    height: 48,
                },
                '.MuiSelect-multiple:has(> .MuiBox-root)': { padding: 0, backgroundColor: 'red !important' },
                '.MuiSelect-multiple > div': {
                    padding: '8px 0 8px 8px',
                },
                '.Mui-disabled': {
                    WebkitTextFillColor: colors.greyText[300],
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
                '&.Mui-focused .MuiSelect-iconOutlined': {
                    color: colors.primary[500]
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
            '&.Mui-error': {
                color: colors.alertColors.error
            },
            '.multiple-box': {
                height: 'unset !important',
                minHeight: 48,
                paddingLeft: '0px !important',
            }
        },
    },
};

export default Select;