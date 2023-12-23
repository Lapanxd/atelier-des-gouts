import { IUser } from '../models/user.model.ts';
import axios from 'axios';
import { ApiResponse } from '../models/api-response.ts';
import { IAuth } from '../models/auth.model.ts';
import { ICreateSession } from '../models/create-session.model.ts';
import { ISession } from '../models/session.model.ts';

export class SessionService {

  private readonly getToken = localStorage.getItem('token');

  getSessions() {
  }

  createSession(session: ICreateSession) {
    return axios
      .post('http://localhost:1337/api/sessions', session, {
        headers: {
          'Authorization': `Bearer ${this.getToken}`,
        },
      })
      .then((response: ApiResponse<ISession>) => {
        // @todo
        console.log(response);
      })
      .catch((error) => console.error(error));
  }

  updateSession() {
  }

  endSession() {
  }

  deleteSession() {
  }
}

export const sessionService = new SessionService();
