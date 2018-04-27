import {Request, Response, Router} from 'express';
import * as https from 'https';

const router: Router = new Router();
const FLICKR_URL = 'https://api.flickr.com/services/rest/';
const FLICKR_API_KEY = 'api_key=b13a9f55b6dd4a647977e29fd8d67159';
const FLICKR_JSON_PARAMS = 'format=json&nojsoncallback=1';
const FLICKR_USER_ID = 'user_id=129062663%40N03';
const FLICKR_PHOTSET_ID = 'photoset_id=72157652411378405';
const FLICKR_GET_PHOTOS_METHOD = 'method=flickr.photosets.getPhotos';
const FLCKR_GET_PHOTOS_EXTRAS = 'extras=url_m,url_o';
const FLICK_GET_PHOTOS_URL = FLICKR_URL + '?' + [
  FLICKR_GET_PHOTOS_METHOD,
  FLICKR_API_KEY,
  FLICKR_PHOTSET_ID,
  FLICKR_USER_ID,
  FLICKR_JSON_PARAMS,
  FLCKR_GET_PHOTOS_EXTRAS].join('&');

/**
 * Récupération d'un ensemble de photos depuis un album Flickr.
 * On récupère l'url de les images miniature et originale
 */
router.route('').get((req: Request, res: Response) => {
  https.get(FLICK_GET_PHOTOS_URL, resp => {
    let data: any = '';

    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      console.log(JSON.parse(data).explanation);
      data = JSON.parse(data);
      const photos = data.photoset.photo;
      console.log(photos);
      const tab = photos.map(photo => {
        return {
          mini: photo.url_m,
          orig: photo.url_o,
          title: photo.title
        };
      });
      res.send(tab);
    });

  }).on('error', err => {
    console.log('Error: ' + err.message);
    res.send([]);
  });
});

export const GalleriesController: Router = router;
