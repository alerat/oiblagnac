import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListGalleryComponent } from './list-gallery/list-gallery.component';
import { OneGalleryComponent } from './one-gallery/one-gallery.component';


const routes: Routes = [
  {path: '', component: ListGalleryComponent,
  children: [
    {path: 'gallerie', component: OneGalleryComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
