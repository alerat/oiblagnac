import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AccueilComponent} from './accueil.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ActualiteService} from '../services/actualite.service';
import {MaterielsService} from '../services/materiels.service';
import {PhotoMensuelleService} from '../services/photo-mensuelle.service';
import {of} from 'rxjs/observable/of';

describe('AccueilComponent', () => {
  let component: AccueilComponent;
  let fixture: ComponentFixture<AccueilComponent>;


  beforeEach(async(() => {
    const photosMensuelles = [{
      'photos': [{
        'titre': 'Marée haute',
        'footer': 'Corinne Galand',
        'image': './assets/gallerie/photo_du_mois/2018/01.jpg'
      }, {
        'titre': 'L\'art abstrait',
        'footer': 'Richard Olvera',
        'image': './assets/gallerie/photo_du_mois/2018/03.jpg'
      }],
      '_id': '5a97d2f298f4ee15c444a805',
      'numero': 43,
      'nom': 'Photo adhérent',
      'annee': 2018,
      'type': 'photo_du_mois',
      '__v': 3
    }];
    const photoMensuelleServiceStub = jasmine.createSpyObj('PhotoMensuelleService', ['getPhotoMensuelles']);
    const getPhotoMensuellesSpy = photoMensuelleServiceStub.getPhotoMensuelles.and.returnValue(of(photosMensuelles));

    TestBed.configureTestingModule({
      declarations: [AccueilComponent],
      imports: [NgbModule.forRoot()],
      providers: [ActualiteService, MaterielsService, {
        provide: PhotoMensuelleService,
        useValue: photoMensuelleServiceStub
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title', () => {
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toContain('Présentation du club');
  });
});
