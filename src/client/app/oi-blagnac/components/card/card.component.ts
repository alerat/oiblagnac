import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Actualite } from '../../model/actualite';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() actualite: Actualite;
  @ViewChild('videoPlayer') videoplayer: any;

  toggleVideo(event: any) {
      this.videoplayer.nativeElement.play();
  }
  constructor(private sanitizer: DomSanitizer) {

  }
  videoURL(video) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(video);
  }
  ngOnInit() {

  }

}
