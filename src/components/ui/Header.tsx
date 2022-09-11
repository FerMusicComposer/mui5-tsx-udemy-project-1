import { Box, Divider, Grid, Typography } from '@mui/material';
import React from 'react';

type HeaderProps = {
    title: string;
    description: string;
    element?: React.ReactNode | null;
};

export const Header: React.FC<HeaderProps> = ({ title, description, element }) => {
    return (
        <div>
            <Box sx={{ width: '100%', height: '350px' }}>
                <Grid
                    sx={{ height: '100%' }}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={5}>
                        <Grid
                            sx={{ height: '100%' }}
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item>
                                <Typography variant="h2" fontWeight="medium">
                                    {title}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography sx={{ mt: 2 }}>{description}</Typography>
                            </Grid>
                            {element !== undefined && (
                                <Grid sx={{ mt: 4 }} item>
                                    {element}
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Divider />
        </div>
    );
};
