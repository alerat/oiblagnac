import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GalleryModel} from '../../../../server/base/model/gallery.model';

@Component({
  templateUrl: './galleries.component.html'
})
export class GalleriesComponent implements OnInit {

  private galleries: Array<GalleryModel>;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: { galleries: Array<GalleryModel> }) => {
      this.galleries = data.galleries;
    });
  }

  ngOnInit(): void {
  }

}
