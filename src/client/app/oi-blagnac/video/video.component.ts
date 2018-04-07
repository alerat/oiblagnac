import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Actualite } from '../model/actualite';
import { ActualiteService } from '../services/actualite.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  actualites: Actualite[];
  constructor(private actuService: ActualiteService) { }

  ngOnInit() {
    this.actualites = this.actuService.getActualitesVideo();
  }


}
