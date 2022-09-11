import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { lightTheme } from './lightTheme';
import { darkTheme } from './darkTheme';
import { ToggleThemeMode } from '../context/ThemeModeContext';

type ThemeProp = {
    children: JSX.Element;
};

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
    return <ToggleThemeMode>{children}</ToggleThemeMode>;
};
