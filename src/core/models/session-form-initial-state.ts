import { Nullable } from '../types/nullable.ts';

export interface ISessionFormInitialState {
  clients: {
    id: number;
    firstname: string;
    lastname: string;
  }[];
  gallery: Nullable<string>;
  formStep: number;
}
