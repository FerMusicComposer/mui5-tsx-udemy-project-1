import React, { useEffect } from 'react';
import { Container, Button } from '@mui/material';
import { Header } from '../../components/ui/Header';
import { useNotification } from '../../context/NotificationContext';

export const HomePage: React.FC = () => {
    const { getError, getSuccess } = useNotification();

    const handleClickError = () => {
        getError('Hello World, fix this error .|.');
    };
    const handleClickSuccess = () => {
        getSuccess(`Now everything's fine`);
    };

    return (
        <>
            <Header
                title="React-TS and MUI5 Template"
                description="Template configured from scratch with Webpack 5 and TS 4.8"
            />
            <Container sx={{ mt: 4 }} maxWidth="lg">
                <Button fullWidth onClick={handleClickError}>
                    Click for an error
                </Button>
                <Button sx={{ mt: 3 }} fullWidth onClick={handleClickSuccess}>
                    Click for a fix
                </Button>
            </Container>
        </>
    );
};
