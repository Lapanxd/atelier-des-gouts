import { IUser } from './user.model.ts';

export interface IAuth extends IUser {
  jwt: string;
}