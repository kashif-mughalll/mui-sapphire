import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'theme/theme';

const SudofyTheme = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default SudofyTheme;