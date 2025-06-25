import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App/App.tsx';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter basename="/warhammer_wizard/">
            <App />
        </BrowserRouter>
    </StrictMode>
);
