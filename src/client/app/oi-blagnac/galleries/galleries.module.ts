import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GalleriesRoutingModule} from './galleries-routing.module';
import {GalleriesComponent} from './galleries.component';

@NgModule({
  imports: [
    CommonModule,
    GalleriesRoutingModule
  ],
  declarations: [GalleriesComponent]
})
export class GalleriesModule {
}
