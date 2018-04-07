import { PhotoMensuelleService } from './../services/photo-mensuelle.service';
import { Materiel } from './../model/materiel';
import { Actualite } from './../model/actualite';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActualiteService } from '../services/actualite.service';
import { MaterielsService } from '../services/materiels.service';
import { Photo } from '../model/photo';
import { Observable } from 'rxjs/Observable';
import { Gallery } from '../model/gallery';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  gallery: Observable<Array<Gallery>>;
  actualites: Actualite[];
  materiels: Materiel[];
  photoMensuelles: Array<Photo> = [];
  constructor(private actuService: ActualiteService,
    private materielsService: MaterielsService,
    private photoMensuelleService: PhotoMensuelleService) {
  }

  ngOnInit() {
    this.actualites = this.actuService.getActualites();
    this.materiels = this.materielsService.getMateriels();
    this.gallery = this.photoMensuelleService.getPhotoMensuelles();
    this.gallery.subscribe(data => {
      if (data && data.length > 0) {
        for (const photo of data[0].photos) {
          this.photoMensuelles.push(photo);
        }
      }
    });
  }

}
