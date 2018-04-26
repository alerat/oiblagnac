import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ActualiteService} from './oi-blagnac/services/actualite.service';
import {MaterielsService} from './oi-blagnac/services/materiels.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PhotoMensuelleService} from './oi-blagnac/services/photo-mensuelle.service';
import {HttpClientModule} from '@angular/common/http';
import {PhotoGalleryService} from './oi-blagnac/services/gallery.service';
import {AuthService} from './oi-blagnac/auth/auth.service';

const routes: Routes = [
  {path: '', loadChildren: './oi-blagnac/oi-blagnac.module#OiBlagnacModule'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    ActualiteService,
    MaterielsService,
    PhotoMensuelleService,
    PhotoGalleryService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
