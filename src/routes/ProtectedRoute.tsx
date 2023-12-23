import { useAuth } from '../contexts/Auth/AuthContext.tsx';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to='/login' />;
  }

  return (
    <div className='flex justify-center'>
      <div className='max-w-screen-lg w-full'>
        <Outlet />
      </div>
    </div>
  );
};