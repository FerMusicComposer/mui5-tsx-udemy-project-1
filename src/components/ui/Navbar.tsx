import React, { ChangeEvent, useEffect, useState } from 'react';
import { AppBar, Box, Toolbar, Container, Button, Stack, Typography, Tab, Tabs } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { toggleThemeMode } from '../../context/ThemeModeContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { themePalette as tp } from '../../theme/themePalette';
import Menu from './Menu';

export const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const { toggleTheme, mode } = toggleThemeMode();
    const [value, setValue] = useState<number>(0);

    const handleChange = (event: ChangeEvent<HTMLInputElement>, tabIndex: number) => {
        event.preventDefault();
        setValue(tabIndex);
    };

    const handleLogoClick = () => {
        setValue(0);
        navigate('/');
    };

    useEffect(() => {
        if (window.location.pathname === '/' && value !== 0) {
            setValue(0);
        } else if (window.location.pathname === '/services' && value !== 1) {
            setValue(1);
        } else if (window.location.pathname === '/revolution' && value !== 2) {
            setValue(2);
        } else if (window.location.pathname === '/about' && value !== 3) {
            setValue(3);
        } else if (window.location.pathname === '/contact' && value !== 4) {
            setValue(4);
        }
    }, [value]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar disableGutters>
                    <Container maxWidth="xl">
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item>
                                {mode === 'light' ? (
                                    <Button
                                        sx={{ color: tp.lightTextPrimary, backgroundColor: tp.arcOrange }}
                                        disableFocusRipple
                                        disableRipple
                                        variant="text"
                                        onClick={() => handleLogoClick()}
                                    >
                                        YOURLOGO
                                    </Button>
                                ) : (
                                    <Button
                                        sx={{ color: tp.darkTextPrimary, backgroundColor: tp.dark1 }}
                                        disableFocusRipple
                                        disableRipple
                                        variant="text"
                                        onClick={() => handleLogoClick()}
                                    >
                                        YOURLOGO
                                    </Button>
                                )}
                            </Grid>
                            <Grid item>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="secondary"
                                    textColor="secondary"
                                >
                                    <Tab label="Home" onClick={() => navigate('/')} />
                                    <Tab label="Services" onClick={() => navigate('/services')} />
                                    <Tab label="The Revolution" />
                                    <Tab label="About Us" />
                                    <Tab label="Contact Us" />
                                </Tabs>
                            </Grid>
                            <Grid item>
                                <Menu />
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
