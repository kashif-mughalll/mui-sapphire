const AvatarGroup = {
    styleOverrides: {
        root: {
            width: 'max-content',
            '.MuiAvatar-colorDefault, .MuiAvatar-root': {
                height: 40,
                width: 40,
                fontSize: 16,
                boxSizing: 'border-box',
            }
        },
    },
    variants: [
        {
            props: { size: 'xl' },
            style: {
                '.MuiAvatar-colorDefault, .MuiAvatar-root': {
                    height: 64,
                    width: 64,
                    fontSize: 24,
                    borderWidth: 3,
                    boxSizing: 'border-box',
                    marginLeft: -14
                }
            },
        },
        {
            props: { size: 'lg' },
            style: {
                '.MuiAvatar-colorDefault, .MuiAvatar-root': {
                    height: 40,
                    width: 40,
                    fontSize: 16,
                    boxSizing: 'border-box',
                }
            },
        },
        {
            props: { size: 'md' },
            style: {
                '.MuiAvatar-colorDefault, .MuiAvatar-root': {
                    height: 32,
                    width: 32,
                    fontSize: 12,
                    boxSizing: 'border-box',
                }
            },
        },
        {
            props: { size: 'sm' },
            style: {
                '.MuiAvatar-colorDefault, .MuiAvatar-root': {
                    height: 24,
                    width: 24,
                    fontSize: 10,
                    boxSizing: 'border-box',
                    borderWidth: 1,
                    marginLeft: -6
                }
            },
        },
        {
            props: { size: 'xs' },
            style: {
                '.MuiAvatar-colorDefault, .MuiAvatar-root': {
                    height: 20,
                    width: 20,
                    fontSize: 8,
                    boxSizing: 'border-box',
                    borderWidth: 1,
                    marginLeft: -5
                }
            },
        }
    ],
}

export default AvatarGroup;