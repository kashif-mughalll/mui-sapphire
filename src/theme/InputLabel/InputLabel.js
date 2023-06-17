import colors from "utils/colors";

const InputLabel = {
    styleOverrides: {
        root: {
            '&.MuiInputLabel-root': {
                display: 'flex',
                alignItems: 'center',
                lineHeight: 1,
                position: 'unset',
                fontSize: 16,
                fontWeight: 700,
                textAlign: 'left',
                margin: '0 16px 12px 16px',
                fontFamily: 'ubuntu',
                WebkitTransform: 'unset',
                maxWidth: '100%',
                color: colors.greyText[900],
                textOverflow: 'ellipsis',
                '.MuiInputLabel-asterisk': {
                    color: colors.primary[500],
                    fontSize: 12,
                    fontWeight: 500,
                    marginLeft: 8,
                    "&::before": {
                        content: '"Required"'
                    }
                }
            },
        }
    }
};

export default InputLabel;