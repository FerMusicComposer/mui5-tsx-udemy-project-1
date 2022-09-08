import React from 'react';
import { AppBar, Box, Toolbar, Container, Button, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Typography>YOURLOGO</Typography>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={1}>
                                    <Button variant="contained" onClick={() => navigate('/login')}>
                                        Logout
                                    </Button>
                                    <Button variant="outlined">Useless button</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
