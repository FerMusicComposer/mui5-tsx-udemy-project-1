import { themePalette } from './themePalette';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: themePalette.background,
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
    },
});
