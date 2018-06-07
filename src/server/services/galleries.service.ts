import {GalleryModel} from '../base/model/gallery.model';
import {GalleryPO} from '../base/model/mongoose.schemas';
import {Observable} from 'rxjs/internal/Observable';

export class GalleriesService {

  public constructMenu(): Observable<Array<GalleryModel>> {
    return Observable.create((observer) => {
      const retour: Array<GalleryModel> = [];
      let galleryModel;
      const gallery: GalleryPO = new GalleryPO({
        label: 'Chaussures',
        year: 2018,
        photos: [
          {
            label: 'Maman ROSE',
            author: 'Pascal Bernard',
            idFlickr: '41186644585'
          }
        ]
      });
      // gallery.save();
      GalleryPO.find({}, 'label year', (err, galleries) => {
        if (!err) {
          galleries.forEach(gallery => {
            console.log(gallery);
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

export const galleriesService: GalleriesService = new GalleriesService();
