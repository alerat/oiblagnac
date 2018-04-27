import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VideoComponent} from './video.component';
import {ActualiteService} from '../services/actualite.service';
import {CardComponent} from '../components/card/card.component';

describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VideoComponent, CardComponent],
      providers: [ActualiteService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
