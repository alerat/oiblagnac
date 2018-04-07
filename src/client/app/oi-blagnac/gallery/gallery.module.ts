import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { ListGalleryComponent } from './list-gallery/list-gallery.component';
import { ComponentsModule } from '../components/components.module';
import { OneGalleryComponent } from './one-gallery/one-gallery.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    GalleryRoutingModule,
    ComponentsModule,
    FormsModule
  ],
  declarations: [ListGalleryComponent, OneGalleryComponent]
})
export class GalleryModule { }
