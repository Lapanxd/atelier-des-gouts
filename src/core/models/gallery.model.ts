export interface IGallery {
  id: string;
  title: string;
  url: string;
  primaryPhotoId: string;
  countPhotos: number;
  createdAt?: Date;
  updatedAt?: Date;
}