import { SessionFormActions } from '../../core/enums/session-form-actions.ts';
import { ISessionFormInitialState } from '../../core/models/session-form-initial-state.ts';
import { AuthReducerActions } from '../../core/enums/auth-reducer-actions.ts';

export const authReducerInitialState = {
  userInfos: {
    email: null,
    password: null,
    firstname: null,
    lastname: null,
  },
  isLoading: false,
  isLogged: false,
};

export function authReducer(state, action) {
  switch (action.type) {
    // case SessionFormActions.addClient: {
    //   return {
    //     ...state,
    //     clients: [...sessionFormInitialState.clients, { id: state.clients.lenght + 1 }],
    //   };
    // }
    case AuthReducerActions.loginIn: {
      // todo: set token in the local storage
      return {
        ...state,
        isLogged: true,
        user: action.payload,
      };
    }

    default:
      return authReducerInitialState;
  }
}
