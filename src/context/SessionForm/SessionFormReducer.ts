import { SessionFormActions } from '../../core/enums/session-form-actions.ts';
import { ISessionFormInitialState } from '../../core/models/session-form-initial-state.ts';

export const sessionFormInitialState: ISessionFormInitialState = {
  clients: [],
  gallery: null,
  formStep: 1,
};

export function sessionFormReducer(state, action) {
  switch (action.type) {
    case SessionFormActions.addClient: {
      return {
        ...state,
        clients: [...sessionFormInitialState.clients, { id: state.clients.lenght + 1 }],
      };
    }

    case SessionFormActions.setClient: {
      const id = state.clients.length + 1;
      console.log('test');
      return {
        ...state,
        client: state.clients.push({
          id,
          firstname: action.payload.firstname,
          lastname: action.payload.lastname,
        }),
      };
    }

    case SessionFormActions.setGallery: {
      return {
        ...state,
        gallery: action.payload,
      };
    }

    case SessionFormActions.setNextStep: {
      console.log(state.formStep);
      return {
        ...state,
        formStep: state.formStep + 1,
      };
    }

    case SessionFormActions.setPreviousStep: {
      return {
        ...state,
        formStep: state.formStep - 1,
      };
    }

    default:
      return sessionFormInitialState;
  }
}
