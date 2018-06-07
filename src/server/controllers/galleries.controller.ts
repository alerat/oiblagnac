import {Request, Response, Router} from 'express';
import * as https from 'https';

const router: Router = Router();
const FLICKR_URL = 'https://api.flickr.com/services/rest/';
const FLICKR_API_KEY = 'api_key=e3a7d42c3fe5af695954428715be897b';
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

const oauthToken = {
  oauth_token: '72157694323426932-8cf561bb5d0cdfe3',
  oauth_token_sig: 'ae07255749122b1e4606551b320c6baf'
};

https.get('https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=27d344f68539283cb5262496457eebd7&photoset_id=72157694321614622&user_id=164591808%40N08&format=json&nojsoncallback=1&auth_token=72157694323426932-8cf561bb5d0cdfe3&api_sig=ae07255749122b1e4606551b320c6baf', resp2 => {
  let data2: any = '';

  resp2.on('data', (chunk) => {
    data2 += chunk;
  });

  resp2.on('end', () => {
    data2 = JSON.parse(data2);
  });
});

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
      data = JSON.parse(data);
      const photos = data.photoset.photo;
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
