import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAuth } from '../contexts/Auth/AuthContext.tsx';
import { ProtectedRoute } from './ProtectedRoute';
import Login from '../pages/public/Login.tsx';
import Dashboard from '../pages/protected/Dashboard/Dashboard.tsx';
import CreateSession from '../pages/protected/CreateSession/CreateSession.tsx';

const Routes = () => {
  const { token } = useAuth();

  const routesForAuthenticatedOnly = [
    {
      path: '/',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/',
          element: <Dashboard />,
        },
        {
          path: '/create-session',
          element: <CreateSession />,
        },
        {
          path: '/logout',
          element: <div>Logout</div>,
        },
      ],
    },
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: '/login',
      element: <Login />,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;