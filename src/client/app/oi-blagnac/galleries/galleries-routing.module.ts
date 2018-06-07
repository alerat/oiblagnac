import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GalleriesResolver} from './galleries.resolver';
import {GalleriesComponent} from './galleries.component';

const routes: Routes = [
  {path: '', component: GalleriesComponent, resolve: {galleries: GalleriesResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [GalleriesResolver]
})
export class GalleriesRoutingModule {
}
