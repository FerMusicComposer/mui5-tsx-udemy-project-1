import React from 'react';
import { AppBar, Box, Toolbar, Container, Button, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { toggleThemeMode } from '../../context/ThemeModeContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { themePalette as tp } from '../../theme/themePalette';

export const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const { toggleTheme, mode } = toggleThemeMode();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item>
                                {mode === 'light' ? (
                                    <Typography sx={{ color: tp.lightTextPrimary }}>YOURLOGO</Typography>
                                ) : (
                                    <Typography sx={{ color: tp.darkTextPrimary }}>YOURLOGO</Typography>
                                )}
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={1}>
                                    <Button variant="contained" onClick={() => navigate('/login')}>
                                        Logout
                                    </Button>
                                    <Button variant="outlined" onClick={() => toggleTheme()}>
                                        {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
                                    </Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
