import { createFlickr, Flickr } from 'flickr-sdk';
import { IPhoto } from '../models/photo.model.ts';
import { flickrAdapter, flickrPhotoAdapterMode } from '../adapters/flickr.adapter.ts';
import { IGallery } from '../models/gallery.model.ts';

class FlickrService {
  private readonly flickr: Flickr;
  private readonly userid = '199637161@N05'; // @todo mettre ça dans un .env

  constructor() {
    // @todo mettre dans le .env la clé api
    this.flickr = createFlickr('6fd39acbb6cf6713ef732bcd6d31db8d').flickr;
  }

  // @todo typer le retour de la méthode
  async getGalleries(userId: string): Promise<IGallery[]> {
    const response = await this.flickr('flickr.galleries.getList', { user_id: userId }); // @todo changer le type du userId

    return flickrAdapter.adaptFlickrGalleries(response);
  }

  // @todo typer le retour de la méthode
  // à voir si cette méthode est utile
  async getGalleryPhotos(galleryId: string) {
    // @todo mettre dans le .env le user_id
    return await this.flickr('flickr.galleries.getPhotos', {
      gallery_id: galleryId,
    });
  }

  // @todo voir si on peut pas récupérer les infos de toutes les photo d'un coup plutôt que fait 12000000 appels API
  async getPhotoById(photoId: string): Promise<IPhoto> {
    const response = await this.flickr('flickr.photos.getSizes', {
      photo_id: photoId,
    });

    return flickrAdapter.adaptFlickrPhoto(flickrPhotoAdapterMode.url, {
      id: photoId,
      apiData: response,
    });
  }

  // @todo voir si on peut pas récupérer les infos de toutes les photo d'un coup plutôt que fait 12000000 appels API
  async getPhotoInformations(photoId: string): Promise<IPhoto> {
    const response = await this.flickr('flickr.photos.getInfo', {
      photo_id: photoId,
    });

    return flickrAdapter.adaptFlickrPhoto(flickrPhotoAdapterMode.info, {
      id: photoId,
      apiData: response,
    });
  }
}

export const flickrService = new FlickrService();
