import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SecuredRoutingModule} from './secured-routing.module';
import {CompteComponent} from './compte/compte.component';
import {SecuredGuard} from './secured.guard';

@NgModule({
  imports: [
    CommonModule,
    SecuredRoutingModule
  ],
  declarations: [CompteComponent],
  providers: [SecuredGuard]
})
export class SecuredModule {
}
