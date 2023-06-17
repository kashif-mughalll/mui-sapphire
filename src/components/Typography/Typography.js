import React from 'react';
import PropTypes from 'prop-types';
import Text from "@mui/material/Typography";
import { typographyVariants, typographyFonts } from 'utils/constants';

const Typography = ({ children, ...props }) => {
    return (
        <Text {...props}>
            {children}
        </Text>
    )
}

Typography.propTypes = {
    variant: PropTypes.oneOf(typographyVariants),
    color: PropTypes.string,
    fontFamily: PropTypes.oneOf(typographyFonts)
}

Typography.defaultProps = {
    variant: 'body1',
    color: null,
    fontFamily: null
};

export default Typography;