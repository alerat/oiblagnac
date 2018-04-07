import { Injectable } from '@angular/core';
import { Photo } from '../model/photo';
import { Gallery } from '../model/gallery';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinct';
import { RequestOptions } from '@angular/http';
@Injectable()
export class PhotoGalleryService {
  private dataStore: {
    galleries: Observable<Gallery>;
  };

  getLastGallery(): Observable<Gallery> {
    return this.http.get<Gallery>('/api/galleries/gallery/last');
  }

  getGalleryAllAnnee(type: string): Observable<Array<number>> {
    return this.http.get<Array<number>>('/api/galleries/types/' + type + '/annees');
  }

  getGalleryByAnneeByType(annee: number, type: string): Observable<Array<Gallery>> {
    return this.http.get<Array<Gallery>>('/api/galleries/types/' + type + '/annees/' + annee);
  }

  getGalleryByType(type: string): Observable<Array<Gallery>> {
    return this.http.get<Array<Gallery>>('/api/galleries/types/' + type);
  }

  getGalleryByIdByPaginationPhoto(numero: number, page: number, nombreElement: number): Observable<Gallery> {
    let params = new HttpParams();
    params = params.append('page', '' + page);
    params = params.append('nombreElement', '' + nombreElement);
    return this.http.get<Gallery>('/api/galleries/' + numero + '/filterPhoto', {params: params});
  }

  getGalleryById(numero: number): Observable<Gallery> {
    return this.http.get<Gallery>('/api/galleries/' + numero);
  }

  getObservableGallery(): Observable<Gallery> {
    return this.http.get<Gallery>('/api/galleries');
  }

  createGallery(gallery: Gallery): Observable<string> {
    return this.http.post<string>('/api/galleries/' + gallery.numero, gallery);
  }

  createFile(gallerie: Gallery, photo: any, name: string, namePhoto: string, footerPhoto: string): Observable<any> {
    const formData = new FormData();
    console.log(photo[0]);
    formData.append('photo', photo[0]);
    console.log(formData);
    const httpOptions = {
      headers: new HttpHeaders()
    };
    const query = '?name=' + namePhoto + '&footer=' + footerPhoto;
    return this.http.post('/api/galleries/' + gallerie.numero + '/photos/' + name + '.jpg' + query, formData, httpOptions);

  }

  constructor(private http: HttpClient) {
  }


}
