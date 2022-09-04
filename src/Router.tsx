import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';
import { RouterLayout } from './RouterLayout';

export const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<RouterLayout />}>
                <Route path="/" element={<HomePage />} />
            </Route>
        </Routes>
    );
};
