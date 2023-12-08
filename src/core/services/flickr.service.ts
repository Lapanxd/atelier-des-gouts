import { createFlickr, Flickr } from 'flickr-sdk';
import { IPhoto } from '../models/photo.model.ts';
import { flickrAdapter } from '../adapters/flickr.adapter.ts';
import { IGallery } from '../models/gallery.model.ts';

class FlickrService {
  private readonly flickr;
  private readonly userid = '199637161@N05';

  constructor() {
    // @todo mettre dans le .env la clé api
    this.flickr = createFlickr('6fd39acbb6cf6713ef732bcd6d31db8d').flickr;
  }

  // @todo typer le retour de la méthode
  async listGalleries(userId: string): Promise<IGallery[]> {
    // @todo mettre dans le .env le user_id
    const response = await this.flickr('flickr.galleries.getList', { user_id: userId });

    return flickrAdapter.adaptFlickrGalleries(response);
  }

  // @todo typer le retour de la méthode
  async getGalleriePhotos(galleryId: string) {
    // @todo mettre dans le .env le user_id
    return await this.flickr('flickr.galleries.getPhotos', {
      gallery_id: galleryId,
    });
  }

  // @todo voir si on peut pas récupérer les infos de toutes les photo d'un coup plutôt que fait 12000000 appels API
  async getPhotoInfos(photoId: string): Promise<IPhoto> {
    const response = await this.flickr('flickr.photos.getInfo', {
      photo_id: photoId,
    });

    return flickrAdapter.adaptFlickrPhoto(response);
  }
}

export const flickrService = new FlickrService();

