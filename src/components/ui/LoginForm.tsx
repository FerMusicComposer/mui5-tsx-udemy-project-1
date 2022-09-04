import React from 'react';
import { useState } from 'react';
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

type UserProps = {
    email: string;
    pwd: string;
};

export const LoginForm: React.FC = () => {
    const [loginData, setLoginData] = useState<UserProps>({
        email: '',
        pwd: '',
    });

    const handleLoginData = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        console.log(loginData);
    };

    return (
        <Container>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                sx={{
                    minHeight: '90vh',
                }}
            >
                <Grid item>
                    <Paper sx={{ padding: '1.2em', borderRadius: '0.5em', width: '25em' }}>
                        <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
                            Log In
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                name="email"
                                type="email"
                                label="Email"
                                sx={{ mt: 2, mb: 1.5 }}
                                required
                                onChange={handleLoginData}
                            />
                            <TextField
                                fullWidth
                                name="pwd"
                                type="password"
                                label="Password"
                                sx={{ mt: 1.5, mb: 1.5 }}
                                required
                                onChange={handleLoginData}
                            />
                            <Button fullWidth type="submit" sx={{ mt: 1, mb: 2.5 }} variant="contained">
                                Login
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};
