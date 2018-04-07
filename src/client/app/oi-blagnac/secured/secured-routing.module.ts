import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SecuredGuard} from './secured.guard';
import {CompteComponent} from './compte/compte.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [SecuredGuard],
    children: [
      {path: 'compte', component: CompteComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecuredRoutingModule {
}
