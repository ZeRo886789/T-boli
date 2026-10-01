import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/globals.css';
import './styles/editorial.css';
import './styles/people.css';
import registerGSAPPlugins from './utils/gsapSetup';
import App from './App.jsx';

registerGSAPPlugins();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
