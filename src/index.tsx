import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { ThemeProvider } from './contexts/ThemeProvider';
import { Main } from './pages/Main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <div className="flex flex-col min-h-screen selection:bg-accent selection:text-primaryDark dark:selection:text-primaryLight scroll-smooth">
        <Main />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);