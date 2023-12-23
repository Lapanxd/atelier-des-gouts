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
  duoImages: Nullable<{
    id: number;
    urls: [string, string];
  }[]>;
}
