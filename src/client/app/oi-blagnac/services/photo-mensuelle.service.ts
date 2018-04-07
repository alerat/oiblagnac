import { Gallery } from './../model/gallery';
import { Injectable } from '@angular/core';
import { Photo } from '../model/photo';
import { PhotoGalleryService } from './gallery.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PhotoMensuelleService {
  photoMensuelles: Observable<Array<Gallery>>;

  getPhotoMensuelles(): Observable<Array<Gallery>> {
    this.photoMensuelles = this.photoGalleryService.getGalleryByAnneeByType(2018, 'photo_du_mois');
    return this.photoMensuelles;
  }
  constructor(private photoGalleryService: PhotoGalleryService) {
 }

}
