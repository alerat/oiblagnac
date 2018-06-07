import {GalleryModel} from '../base/model/gallery.model';
import {GalleryPO} from '../base/model/mongoose.schemas';
import {Observable} from 'rxjs/internal/Observable';

export class GalleriesService {

  public constructMenu(): Observable<Array<GalleryModel>> {
    return Observable.create((observer) => {
      const retour: Array<GalleryModel> = [];
      let galleryModel;
      /*  const gallery: GalleryPO = new GalleryPO({
          label: 'Chaussures',
          year: 2018
        });
        gallery.save();*/
      GalleryPO.find({}, (err, galleries) => {
        // console.log(themes);
        // console.log(err);
        if (!err) {
          galleries.forEach(gallery => {
            galleryModel = new GalleryModel();
            galleryModel.label = gallery.label;
            galleryModel.year = gallery.year;
            retour.push(galleryModel);
          });
          observer.next(retour);
        } else {
          console.error('Problème accès base : ' + err);
        }
      });
    });
  }
}

export const themeService: GalleriesService = new GalleriesService();
