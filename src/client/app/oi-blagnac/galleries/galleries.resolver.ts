import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {GalleriesMenuModel} from '../model/GalleriesMenuModel';
import {Observable} from 'rxjs/internal/Observable';
import {GalleriesService} from '../services/galleries.service';

@Injectable()
export class GalleriesResolver implements Resolve<GalleriesMenuModel> {
  constructor(private galleriesService: GalleriesService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<GalleriesMenuModel> | Promise<GalleriesMenuModel> | GalleriesMenuModel {
    return this.galleriesService.getGalleryMenu();
  }


}
