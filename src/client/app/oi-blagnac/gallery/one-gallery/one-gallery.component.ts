import {ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PhotoGalleryService} from '../../services/gallery.service';
import {Gallery} from '../../model/gallery';
import * as  moment from 'moment';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-one-gallery',
  templateUrl: './one-gallery.component.html',
  styleUrls: ['./one-gallery.component.scss']
})
export class OneGalleryComponent implements OnInit, OnDestroy, OnChanges {
  subquery: any;
  subGallery: any;
  @Input() galleryCurrent: Gallery;
  nbPage: number;
  @Input() pageCurrente;
  nombreElementParPage = 9;
  nbPhotos = 0;
  indiceDeb = 0;
  indiceFin = 0;
  photo: any;
  model = {
    'titre': '',
    'commentaire': ''
  };
  afficherUpload = false;
  saveFile: any;

  constructor(private route: ActivatedRoute, private ref: ChangeDetectorRef,
              private router: Router, private galleryService: PhotoGalleryService) {
  }

  ngOnChanges(values) {
    this.callbackGetGallery(this.galleryCurrent);
  }

  ngOnInit() {
    this.callbackGetGallery(this.galleryCurrent);
  }

  callbackGetGallery(gallery: Gallery) {
    if (gallery && gallery.photos) {
      this.nbPhotos = gallery.photos.length;
    }
    this.calculElement();
  }

  ngOnDestroy() {
  }

  calculNbPage() {
    this.nbPage = Number.parseInt('' + (this.nbPhotos / this.nombreElementParPage));
    if (this.nbPhotos % this.nombreElementParPage !== 0) {
      this.nbPage++;
    }
    if (this.nbPage === 0) {
      this.nbPage = 1;
    }
  }

  calculElement() {
    this.calculNbPage();
    this.indiceDeb = 0 + (this.pageCurrente - 1) * +this.nombreElementParPage;
    this.indiceFin = this.indiceDeb + +this.nombreElementParPage;
  }

  nextPage() {
    if (this.indiceFin < this.nbPhotos) {
      this.indiceDeb = this.indiceFin;
      this.indiceFin = +this.indiceDeb + +this.nombreElementParPage;
      this.pageCurrente++;
    }
  }

  onSubmitFile() {
    this.galleryService.createFile(this.galleryCurrent, this.photo, moment().format('YYYYmmddHHMMss'),
      this.model.titre, this.model.commentaire)
      .subscribe(file => {
        this.saveFile = file;
        this.afficherBloc();
      });
  }

  onChangeFile(f) {
    this.photo = f;
  }

  previousPage() {
    if (this.indiceDeb !== 0) {
      this.indiceFin = this.indiceDeb;
      this.indiceDeb = this.indiceFin - this.nombreElementParPage;
      this.pageCurrente--;
    }
  }

  afficherBloc() {
    this.afficherUpload = !this.afficherUpload;
  }
}
