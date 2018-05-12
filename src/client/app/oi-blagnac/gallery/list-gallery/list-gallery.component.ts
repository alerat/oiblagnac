import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {PhotoGalleryService} from '../../services/gallery.service';
import {Gallery} from '../../model/gallery';
import {Observable, of} from 'rxjs';
import {TypeGallery} from '../../model/typeGallery';


@Component({
  selector: 'app-list-gallery',
  templateUrl: './list-gallery.component.html',
  styleUrls: ['./list-gallery.component.scss']
})
export class ListGalleryComponent implements OnInit, OnDestroy {
  subquery: any;
  subGaleryMenu: any;
  typeGallery: string;
  galleryCurrent: Gallery;
  numeroGallery: number;
  pageCurrente: number;
  firstGallery: number;
  typesMenu: Array<string>;
  galeriesMenu: Observable<Array<Gallery>>;
  indiceGalleryDeb = 0;
  indiceGalleryFin = 5;
  pageGalleryCurrent = 1;
  nbGallery: number;
  nbPageGallery: number;
  nbGalleryByPage = 5;

  constructor(private route: ActivatedRoute,
              private router: Router, private galleryService: PhotoGalleryService) {
  }

  ngOnInit() {
    this.subquery = this.route.queryParams.subscribe(params => this.callbackChangePathRequestParamRoute(params));
  }

  buildListTypeGallery() {
    this.typesMenu = [];
    for (const key in TypeGallery) {
      if (TypeGallery.hasOwnProperty(key)) {
        const element = TypeGallery[key];
        this.typesMenu.push(element);
      }
    }
  }

  callbackChangePathRequestParamRoute(params) {
    this.numeroGallery = +params['id'];
    this.typeGallery = params['typeGallery'] || TypeGallery['hall'];
    this.pageCurrente = +params['page'];
    this.buildListTypeGallery();
    this.subGaleryMenu = this.galleryService.getGalleryByType(this.typeGallery).subscribe(galleries => {
      const gLast = galleries[0];
      if (!this.numeroGallery && this.numeroGallery === 0) {
        this.numeroGallery = gLast.numero;
        this.galleryCurrent = gLast;
      } else {
        galleries.forEach(g => {
          if (g.numero === this.numeroGallery) {
            this.galleryCurrent = g;
          }
        });
      }
      this.initPaginationMenuGallery(galleries);
      this.galeriesMenu = of(galleries);
      const navigationExtras: NavigationExtras = {
        queryParams: {'page': this.pageCurrente, 'typeGallery': this.typeGallery, 'id': this.numeroGallery}
      };
      this.router.navigate(['/list-gallery/gallerie'], navigationExtras);
    });
  }

  ngOnDestroy() {
    this.subquery.unsubscribe();
    this.subGaleryMenu.unsubscribe();
  }

  initPaginationMenuGallery(galleries: Gallery[]) {
    this.nbGallery = galleries.length;
    this.nbPageGallery = Number.parseInt('' + (this.nbGallery / this.nbGalleryByPage));
    if (this.nbGallery % this.nbGalleryByPage > 0) {
      this.nbPageGallery++;
    }
  }

  previousGallery() {
    this.indiceGalleryDeb -= this.nbGalleryByPage;
    this.indiceGalleryFin -= this.nbGalleryByPage;
    this.pageGalleryCurrent--;
    if (this.indiceGalleryDeb < 0) {
      this.indiceGalleryDeb = 0;
      this.indiceGalleryFin = this.nbGalleryByPage;
      this.pageGalleryCurrent = 1;

    }
  }

  nextGallery() {
    if (this.indiceGalleryDeb + this.nbGalleryByPage <= this.nbGallery) {
      this.indiceGalleryDeb += this.nbGalleryByPage;
      this.indiceGalleryFin += this.nbGalleryByPage;
      this.pageGalleryCurrent++;
    }
  }
}
