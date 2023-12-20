import { Nullable } from '../types/nullable.ts';
import { IGallery } from './gallery.model.ts';

export interface ISessionFormInitialState {
  clients: {
    id: number;
    firstname: string;
    lastname: string;
  }[];
  gallery: Nullable<IGallery>;
  formStep: number;
  duoImages: [string, string][];
}
