import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OiBlagnacRoutingModule} from './oi-blagnac-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OiBlagnacComponent} from './oi-blagnac.component';
import {AccueilComponent} from './accueil/accueil.component';
import {MenuComponent} from './menu/menu.component';
import {VideoComponent} from './video/video.component';
import {FormationComponent} from './formation/formation.component';
import {ConcoursComponent} from './concours/concours.component';
import {TelechargementComponent} from './telechargement/telechargement.component';
import {LiensComponent} from './liens/liens.component';
import {SortiesComponent} from './sorties/sorties.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ComponentsModule} from './components/components.module';
import {GalleryModule} from './gallery/gallery.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    OiBlagnacRoutingModule,
    FormsModule,
    GalleryModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    OiBlagnacComponent,
    AccueilComponent,
    VideoComponent,
    FormationComponent,
    ConcoursComponent,
    TelechargementComponent,
    LiensComponent,
    SortiesComponent,
    MenuComponent
  ]
})
export class OiBlagnacModule {
}
