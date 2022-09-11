import React, { useContext, useState, useMemo } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from '../theme/lightTheme';
import { darkTheme } from '../theme/darkTheme';

type ThemeContextProps = {
    toggleTheme: () => void;
    mode: string;
};

const ThemeModeContext = React.createContext<ThemeContextProps>({ toggleTheme: () => {}, mode: 'light' });

export const ToggleThemeMode: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    // const themeMode = useMemo(
    //     () => ({
    //         toggleTheme: () => {
    //             setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    //         },
    //         mode,
    //     }),
    //     [mode],
    // );
    const toggleTheme = () => {
        mode === 'light' ? setMode('dark') : setMode('light');
    };

    const value = {
        toggleTheme,
        mode,
    };

    return (
        <ThemeModeContext.Provider value={value}>
            {mode === 'light' ? (
                <ThemeProvider theme={lightTheme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            ) : (
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            )}
        </ThemeModeContext.Provider>
    );
};

export const toggleThemeMode = () => {
    const context = useContext(ThemeModeContext);

    if (!context) throw new Error("There's no context");

    return context;
};
