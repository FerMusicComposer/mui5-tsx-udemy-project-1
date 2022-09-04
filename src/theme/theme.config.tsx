import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import React from 'react';
import { theme } from './theme';

type ThemeProp = {
    children: JSX.Element;
};

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
