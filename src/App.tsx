import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NotificationProvider } from './context/NotificationContext';
import { AppRouter } from './Router';

const App: React.FC = () => {
    return (
        <NotificationProvider>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </NotificationProvider>
    );
};

export default App;
