import colors from 'utils/colors';

const Breadcrumbs = {
    styleOverrides: {
        root: {
            fontSize: '14px',
            color: colors.greyText[900],
            'a': {
                display: 'flex',
                alignItems: 'center',
                color: colors.greyText[900],
                textDecoration: 'none',
                'svg': {
                    fontSize: '14px',
                    marginRight: '8px'
                },
                'svg:last-child': {
                    marginRight: 0
                },
                ':hover': {
                    color: colors.primary[500]
                }
            }
        }
    }
};

export default Breadcrumbs;