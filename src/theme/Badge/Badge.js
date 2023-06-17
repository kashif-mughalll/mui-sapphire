import colors from "utils/colors";

const Badge = {
    defaultProps: {
        size: 'lg'
    },
    styleOverrides: {
        root: {
            '.MuiBadge-badge': {
                backgroundColor: colors.primary[500],
                color: colors.secondary.main,
            }
        },
    },
    variants: [
        {
            props: { size: 'xs' },
            style: {
                '.MuiBadge-badge': {
                    minWidth: 10,
                    height: 10,
                    fontSize: 6,
                    padding: '0 3px',
                }
            },
        },
        {
            props: { size: 'sm' },
            style: {
                '.MuiBadge-badge': {
                    minWidth: 10,
                    height: 10,
                    fontSize: 6,
                    padding: '0 3px',
                }
            },
        },
        {
            props: { size: 'md' },
            style: {
                '.MuiBadge-badge': {
                    minWidth: 14,
                    height: 14,
                    fontSize: 8,
                    padding: '0 4px',
                }
            },
        },
        {
            props: { size: 'lg' },
            style: {
                '.MuiBadge-badge': {
                    minWidth: 16,
                    height: 16,
                    fontSize: 10,
                    padding: '0 5px',
                }
            },
        },
        {
            props: { size: 'xl' },
            style: {
                '.MuiBadge-badge': {
                    minWidth: 24,
                    height: 24,
                    fontSize: 12,
                    padding: '0 8px',
                    borderRadius: 14
                }
            },
        }
    ],
};

export default Badge;