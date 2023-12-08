import { createFlickr, Flickr } from 'flickr-sdk';

const { flickr } = createFlickr('<your Flickr API key>');

class FlickrService {
  private flickr: Flickr;

  constructor() {
    this.flickr = createFlickr('6fd39acbb6cf6713ef732bcd6d31db8d').flickr; // @todo a changer très très très très vite faut pas laisser ça là
  }

  async getGalleries() {
    const res = await flickr('flickr.galleries.getList');
  }
}

export const flickService = new FlickrService();