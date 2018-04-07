import {AccueilComponent} from './accueil/accueil.component';
import {OiBlagnacComponent} from './oi-blagnac.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VideoComponent} from './video/video.component';
import {FormationComponent} from './formation/formation.component';
import {ConcoursComponent} from './concours/concours.component';
import {TelechargementComponent} from './telechargement/telechargement.component';
import {LiensComponent} from './liens/liens.component';
import {SortiesComponent} from './sorties/sorties.component';
import {GalleryFormComponent} from './components/gallery-form/gallery-form.component';

const routes: Routes = [
  {
    path: '', component: OiBlagnacComponent,
    children: [
      {path: '', redirectTo: 'home'},
      {path: 'home', component: AccueilComponent},
      {path: 'videos', component: VideoComponent},
      {path: 'formations', component: FormationComponent},
      {path: 'sorties', component: SortiesComponent},
      {path: 'concours', component: ConcoursComponent},
      {path: 'telechargements', component: TelechargementComponent},
      {path: 'liens', component: LiensComponent},
      {path: 'list-gallery', loadChildren: './gallery/gallery.module#GalleryModule'},
      {path: 'form', component: GalleryFormComponent},
      {path: 'secured', loadChildren: './secured/secured.module#SecuredModule'},
    ]
  },
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OiBlagnacRoutingModule {
}
