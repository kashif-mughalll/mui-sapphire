const InputAdornment = {
    variants: [
        {
            props: { position: 'start' },
            style: {
                '&.MuiInputAdornment-root + input': {
                    paddingLeft: 0
                }
            },
        }
    ]
};

export default InputAdornment;