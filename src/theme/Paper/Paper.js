import colors from "utils/colors";

const Paper = {
    styleOverrides: {
        root: {
            '&.MuiPaper-root': {
                fontSize: '14px',
                boxShadow: 'none',
                border: `1px solid ${colors.greyText[100]}`,
                marginTop: '2px',
                borderRadius: '12px',
                'svg, .MuiAvatar-root': {
                    height: '20px',
                    width: '20px',
                    marginRight: '10px'
                },
                '.Mui-selected': {
                    color: colors.primary[500],
                    backgroundColor: 'transparent',
                    '&.Mui-disabled': {
                        fontWeight: 500
                    }
                },
                '.Mui-focusVisible': {
                    backgroundColor: `${colors.greyText[20]} !important`
                },
                '.Mui-disabled': {
                    opacity: 1,
                    color: colors.greyText[300],
                    backgroundColor: 'transparent'
                },
                'ul li': {
                    fontSize: 14,
                    padding: '10px 18px'
                }
            },
            '&.MuiDrawer-paper': {
                borderRadius: 0,
                border: 'none',
                marginTop: 0,
            },
            '&.MuiPaper-root.MuiSnackbarContent-root, &.MuiPaper-root.MuiAlert-root': {
                borderRadius: 4
            }
        }
    }
};

export default Paper;