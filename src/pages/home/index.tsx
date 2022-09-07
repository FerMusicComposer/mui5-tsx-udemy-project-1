import { Container, Button } from '@mui/material';
import React from 'react';
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
        <div>
            <h1 className="headline">You are at Home!</h1>
            <Container sx={{ mt: 4 }} maxWidth="lg">
                <Button fullWidth onClick={handleClickError}>
                    Click for an error
                </Button>
                <Button sx={{ mt: 4 }} fullWidth onClick={handleClickSuccess}>
                    Click for a fix
                </Button>
            </Container>
        </div>
    );
};
