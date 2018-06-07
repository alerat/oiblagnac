import {Request, Response, Router} from 'express';
import {themeService} from '../services/galleries.service';

const router: Router = Router();
const FLICKR_URL = 'https://api.flickr.com/services/rest/';
const FLICKR_API_KEY = 'api_key=3dea4e66f810d58490175a645e1fbbe5';
const FLICKR_JSON_PARAMS = 'format=json&nojsoncallback=1';
const FLICKR_USER_ID = 'user_id=164591808%40N08';
const FLICKR_PHOTSET_ID = 'photoset_id=72157694321614622';
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
 * Récupération du menu des thèmes et galleries.
 */
router.route('/menu').get((req: Request, res: Response) => {
  //

  themeService.constructMenu().subscribe(galleries => {
    console.log(galleries);
  });
  res.status(200).send({});
  /*

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
    });*/
});

export const GalleriesController: Router = router;
