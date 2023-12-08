import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/public/Login.tsx';
import Register from './pages/public/Register.tsx';
import Dashboard from './pages/private/Dashboard/Dashboard.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import CreateSession from './pages/private/CreateSession/CreateSession';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: 'create-session',
    element: <CreateSession />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
