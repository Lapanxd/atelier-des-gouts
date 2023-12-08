import { IPhoto } from '../models/photo.model.ts';
import { IGallery } from '../models/gallery.model.ts';

export class FlickrAdapter {

  // @todo voir pour changer le any ?
  adaptFlickrPhoto(apiData: any): IPhoto {
    const { photo } = apiData;

    return {
      id: photo.id,
      title: photo.title._content,
      description: photo.description._content,
      tags: photo.tags.tag.map(tag => ({ id: tag.id, tag: tag.raw })),
    };
  }

  adaptFlickrGalleries(apiData: any): IGallery[] {
    const { gallery } = apiData.galleries;

    return gallery.map(newGallery => {
      return ({
        id: newGallery.id,
        title: newGallery.title._content,
        url: newGallery.url,
        primaryPhotoId: newGallery.primary_photo_id,
        countPhotos: newGallery.count_photos,
      });
    });
  }
}

export const flickrAdapter = new FlickrAdapter();