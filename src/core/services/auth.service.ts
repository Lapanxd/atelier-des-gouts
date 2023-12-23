import { IUser } from '../models/user.model.ts';
import axios from 'axios';
import { ApiResponse } from '../models/api-response.ts';
import { IAuth } from '../models/auth.model.ts';

export class AuthService {
  login(email: string, password: string): Promise<{ user: IUser, token: string } | void> {
    return axios
      .post('http://localhost:1337/api/auth/local', { identifier: email, password })
      .then((response: ApiResponse<IAuth>) => {
        const { jwt, ...user } = response.data;
        localStorage.setItem('token', jwt);
        return { user, token: jwt };
      })
      .catch((error) => console.error(error));
  }

  // register() {
  // à voir si le register a vraiment un intérêt ou non
  // }

  logout() {
    localStorage.removeItem('token');
    window.location.reload(); // todo refacto
    // @todo vider le store
    // @todo vider le localstorage
    // @todo je sais pas mais certainement un autre truc
  }
}

export const authService = new AuthService();
