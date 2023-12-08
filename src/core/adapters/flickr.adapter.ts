import { IPhoto } from '../models/photo.model.ts';
import { IGallery } from '../models/gallery.model.ts';

export const enum flickrPhotoAdapterMode {
  url = 'url',
  info = 'info',
}

export class FlickrAdapter {
  // @todo voir pour changer le any ?
  adaptFlickrPhoto(
    adapterMode: flickrPhotoAdapterMode,
    image: { id: string; apiData: any },
  ): IPhoto {
    const { photo } = image.apiData;

    if (adapterMode === flickrPhotoAdapterMode.info) {
      return {
        id: image.id,
        title: photo.title._content,
        description: photo.description._content,
        tags: photo.tags.tag.map((tag) => ({ id: tag.id, tag: tag.raw })),
        url: photo.urls.url[0]._content,
      };
    } else if (adapterMode === flickrPhotoAdapterMode.url) {
      const test = {
        id: image.id,
        url: image.apiData.sizes.size.find((size) => size.label === 'Original').source,
        thumbnailUrl: image.apiData.sizes.size.find((size) => size.label === 'Thumbnail').source,
      };

      console.log('adapter', test);

      return test;
    }
  }

  adaptFlickrGalleries(apiData: any): IGallery[] {
    const { gallery } = apiData.galleries;

    return gallery.map((newGallery) => {
      return {
        id: newGallery.id,
        title: newGallery.title._content,
        url: newGallery.url,
        primaryPhoto: { id: newGallery.primary_photo_id },
        countPhotos: newGallery.count_photos,
      };
    });
  }
}

export const flickrAdapter = new FlickrAdapter();
