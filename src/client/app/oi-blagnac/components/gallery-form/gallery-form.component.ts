import {TypeGallery} from './../../model/typeGallery';
import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Gallery} from '../../model/gallery';
import * as  moment from 'moment';


import {Subject} from 'rxjs';


import {PhotoGalleryService} from '../../services/gallery.service';


@Component({
  selector: 'app-gallery-form',
  templateUrl: './gallery-form.component.html',
  styleUrls: ['./gallery-form.component.scss']
})
export class GalleryFormComponent implements OnInit, OnDestroy {
  private searchUpdated: Subject<string> = new Subject<string>();
  save: any;
  saveFile: any;
  lastNumberGallery: number;
  subLastGallery: any;
  subGallery: any;
  model = new Gallery();
  photo: any;
  listeAnnees: Array<number>;
  submitted = false;
  @Output() searchChangeEmitter: EventEmitter<any> = new EventEmitter<any>();

  /*
      onChangeFile(f) {
        console.log(f);
        this.photo = f;
      }
  */
  constructor(private galleryService: PhotoGalleryService) {
  }

  private onSearchType(value: string) {
    console.log(value);
    this.searchUpdated.next(value);
    // Emit the event to all listeners that signed up - we will sign up in our contractor
  }

  ngOnInit() {
    this.listeAnnees = [];
    for (let i = 2010; i <= +moment().format('YYYY') + 1; i++) {
      this.listeAnnees.push(i);
    }
    this.subLastGallery = this.galleryService.getLastGallery().subscribe(g => {
      this.lastNumberGallery = g.numero + 1;
    });
  }

  ngOnDestroy() {
    this.subLastGallery.unsubcribe();
    this.subGallery.unsubcribe();
  }

  onSubmit() {
    if (!this.model.type) {
      this.model.type = TypeGallery['hall'];
    }
    if (!this.model.photos) {
      this.model.photos = [];
    }
    this.submitted = true;
    this.galleryService.createGallery(this.model).subscribe(test => this.save = test);
  }

  /*  onSubmitFile() {
      console.log('test file');
      console.log(this.photo);
      this.galleryService.createFile(this.photo, moment().format('YYYYmmddHHMMss')).subscribe(test => this.saveFile = test);
    }*/
  get diagnostic() {
    return JSON.stringify(this.photo);
  }

  getLastGallery() {
    this.subLastGallery = this.galleryService.getLastGallery().subscribe(g => {
      this.model.numero = this.lastNumberGallery;
      this.model.annee = undefined;
      this.model.nom = undefined;
      this.model.photos = undefined;
      this.model.type = undefined;
      this.model.numero = g.numero + 1;
    });
  }

  getGallery() {
    if (Number(this.model.numero) !== NaN && +this.model.numero < this.lastNumberGallery) {
      this.subGallery = this.galleryService.getGalleryById(this.model.numero).subscribe(g => {
        this.model.annee = g.annee;
        this.model.nom = g.nom;
        this.model.photos = g.photos;
        this.model.type = g.type;
        this.model.numero = g.numero;
      });
    } else {
      this.getLastGallery();
    }
  }

  getNomButtonSubmit() {
    let labelButton = 'Création de la gallerie';
    if (Number(this.model.numero) !== NaN && +this.model.numero < this.lastNumberGallery) {
      labelButton = 'Modification de la gallerie';
    }
    return labelButton;
  }

}
