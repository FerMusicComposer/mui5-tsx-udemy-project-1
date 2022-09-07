import { themePalette } from './themePalette';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: themePalette.background,
            paper: themePalette.dark1,
        },
        primary: {
            main: themePalette.primaryMain,
        },
        secondary: {
            main: themePalette.secondaryMain,
        },
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                style: {
                    backgroundColor: themePalette.dark1,
                },
            },
        },
        MuiButton: {
            defaultProps: {
                style: {
                    textTransform: 'none',
                    boxShadow: 'none',
                    borderRadius: '0.5em',
                    background: themePalette.loginBackground,
                    color: themePalette.primaryFontColor,
                },
            },
        },
        MuiAlert: {
            defaultProps: {
                style: {
                    borderRadius: '0.8em',
                    fontSize: '1em',
                },
            },
            styleOverrides: {
                standardError: {
                    border: `1px solid ${themePalette.errorMain}`,
                    background: themePalette.errorMainBG,
                },
                standardSuccess: {
                    border: `1px solid ${themePalette.successMain}`,
                    background: themePalette.successMainBG,
                },
            },
        },
    },
});
