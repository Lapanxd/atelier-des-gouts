// UserProvider.jsx
import React, {
  Context,
  createContext,
  ReducerState,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import { authReducer, authReducerInitialState } from './AuthReducer.tsx';
import { Nullable } from '../../core/types/nullable.ts';
import { Navigate } from 'react-router-dom';

const defaultValueType = {
  state: authReducerInitialState,
  dispatch: () => null,
};

export const AuthContext: Context<Nullable<any>> = createContext(defaultValueType);
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authReducerInitialState as ReducerState<any>);

  const [token, setToken_] = useState(localStorage.getItem('token'));

  const setToken = (newToken) => {
    setToken_(newToken);
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token); // todo: refacto pour gérer ça que avec le service
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token],
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;