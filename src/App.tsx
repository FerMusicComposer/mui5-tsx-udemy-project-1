import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/ui/Header';
import { AppRouter } from './Router';
interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
}
const App = () => {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
};

export default App;
