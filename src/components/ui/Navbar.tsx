import React from 'react';
import { AppBar, Box, Toolbar, Container, Button, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Typography>LOGO</Typography>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={1}>
                                    <Link to="/login">
                                        <Button variant="contained">Logout</Button>
                                    </Link>
                                    <Button variant="outlined">Register</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
