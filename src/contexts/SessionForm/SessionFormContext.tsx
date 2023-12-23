import { Context, createContext, ReducerState, useReducer } from 'react';
import { sessionFormInitialState, sessionFormReducer } from './SessionFormReducer.ts';
import { Nullable } from '../../core/types/nullable.ts';

const defaultValueType = {
  state: sessionFormInitialState,
  dispatch: () => null,
};

export const SessionFormContext: Context<Nullable<any>> = createContext(defaultValueType);

const SessionFormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    sessionFormReducer,
    sessionFormInitialState as ReducerState<any>,
  );

  return (
    <SessionFormContext.Provider value={{ state, dispatch }}>
      {children}
    </SessionFormContext.Provider>
  );
};

export default SessionFormProvider;
