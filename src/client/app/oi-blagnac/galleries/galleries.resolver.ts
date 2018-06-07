import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {GalleriesMenuModel} from '../model/GalleriesMenuModel';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class GalleriesResolver implements Resolve<GalleriesMenuModel> {
  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<GalleriesMenuModel> | Promise<GalleriesMenuModel> | GalleriesMenuModel {
    return undefined;
  }


}
