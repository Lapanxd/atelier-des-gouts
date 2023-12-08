import { IPhoto } from './photo.model.ts';

export interface IGallery {
  id: string;
  title: string;
  url: string;
  primaryPhoto: IPhoto;
  countPhotos: number;
  createdAt?: Date;
  updatedAt?: Date;
}
