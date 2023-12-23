import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AuthProvider from './contexts/Auth/AuthContext.tsx';
import Routes from './routes/Routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <Routes />
  </AuthProvider>,
);
