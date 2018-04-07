import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OiBlagnacRoutingModule } from '../oi-blagnac-routing.module';
import { GalleryFormComponent } from './gallery-form/gallery-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CardComponent,
    GalleryComponent,
    GalleryFormComponent
  ],
  exports: [
    CardComponent,
    GalleryComponent
  ]
})
export class ComponentsModule { }
