import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/public/Login.tsx';
import Register from './pages/public/Register.tsx';
import Dashboard from './pages/protected/Dashboard/Dashboard.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateSession from './pages/protected/CreateSession/CreateSession';

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
  <div className="flex justify-center">
    <div className="max-w-screen-lg w-full">
      <RouterProvider router={router} />
    </div>
  </div>,
);
