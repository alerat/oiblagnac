import {Component, Input, OnInit} from '@angular/core';
import {Photo} from '../../model/photo';
import {Gallery} from '../../model/gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() gallery: Gallery;
  currentPhoto: Photo;
  @Input() indiceDeb: number;
  @Input() indiceFin: number;

  constructor() {
  }

  ngOnInit() {
  }

  valueBackground(photo: Photo) {
    return 'url(' + photo.image + ')';
  }

  choosePhoto(photo: Photo) {
    this.currentPhoto = photo;
  }

  cacherModal() {
    this.currentPhoto = undefined;
  }
}
