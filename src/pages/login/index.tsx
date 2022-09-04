import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../../components/ui/LoginForm';
import { themePalette } from '../../theme/themePalette';

export const LoginPage: React.FC = () => {
    return (
        <>
            <LoginForm />
        </>
    );
};
