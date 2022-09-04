import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';

export const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
};
