import {Injectable} from '@angular/core';
import {GalleryModel} from '../../../../server/base/model/gallery.model';
import {Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GalleriesService {

  private static API_PREFIX = '/api/public/';

  constructor(private http: HttpClient) {
  }

  getGalleryMenu(): Observable<Array<GalleryModel>> {
    return this.http.get<Array<GalleryModel>>(GalleriesService.API_PREFIX + 'galleries/menu');
  }

}
