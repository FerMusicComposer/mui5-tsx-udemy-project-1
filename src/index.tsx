import './styles/main.scss';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeConfig } from './theme/theme.config';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <ThemeConfig>
            <App />
        </ThemeConfig>
    </React.StrictMode>,
);

if (module.hot) {
    module.hot.accept();
}
