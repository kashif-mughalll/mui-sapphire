import colors from "utils/colors";

const Avatar = {
    defaultProps: {
        size: 'lg'
    },
    styleOverrides: {
        root: {
            backgroundColor: colors.primary[500],
            textTransform: 'capitalize',
            fontWeight: 600
        },

    },
    variants: [
        {
            props: { size: 'xl' },
            style: {
                height: 64,
                width: 64,
                fontSize: 32,
            },
        },
        {
            props: { size: 'lg' },
            style: {
                height: 40,
                width: 40,
                fontSize: 20,
            },
        },
        {
            props: { size: 'md' },
            style: {
                height: 32,
                width: 32,
                fontSize: 16,
            },
        },
        {
            props: { size: 'sm' },
            style: {
                height: 24,
                width: 24,
                fontSize: 12,
            },
        },
        {
            props: { size: 'xs' },
            style: {
                height: 20,
                width: 20,
                fontSize: 10,
            },
        }
    ],
}

export default Avatar;