# OiBlagnac 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## site oi :
## http://www.oi-blagnac.fr/telechargement/Bases_photo.pdf

## installation angular material :
npm install --save @angular/material @angular/cdk

## dependence app.module :
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
    ...
    imports: [
        ...,
        BrowserAnimationsModule,
        FormsModule
    ]
})

## create module shared material 
@NgModule({
  imports: [
   MatAutocompleteModule,    MatButtonModule,    MatButtonToggleModule,    MatCardModule,    MatCheckboxModule,    MatChipsModule,    MatStepperModule,    MatDatepickerModule,    MatDialogModule,    MatExpansionModule,    MatGridListModule,    MatIconModule,    MatInputModule,    MatListModule,    MatMenuModule,    MatNativeDateModule,    MatPaginatorModule,    MatProgressBarModule,    MatProgressSpinnerModule,    MatRadioModule,    MatRippleModule,    MatSelectModule,    MatSidenavModule,    MatSliderModule,    MatSlideToggleModule,    MatSnackBarModule,    MatSortModule,    MatTableModule,    MatTabsModule,    MatToolbarModule,    MatTooltipModule,    CommonModule
  ],
  declarations: [],
  exports: [
   MatAutocompleteModule,    MatButtonModule,    MatButtonToggleModule,    MatCardModule,    MatCheckboxModule,    MatChipsModule,    MatStepperModule,    MatDatepickerModule,    MatDialogModule,    MatExpansionModule,    MatGridListModule,    MatIconModule,    MatInputModule,    MatListModule,    MatMenuModule,    MatNativeDateModule,    MatPaginatorModule,    MatProgressBarModule,    MatProgressSpinnerModule,    MatRadioModule,    MatRippleModule,    MatSelectModule,    MatSidenavModule,    MatSliderModule,    MatSlideToggleModule,    MatSnackBarModule,    MatSortModule,    MatTableModule,    MatTabsModule,    MatToolbarModule,    MatTooltipModule]
})
export class MaterialModule { }

## doc angular material : https://material.angular.io/

## style.css
@import "@angular/material/prebuilt-themes/indigo-pink.css"

## installer hammerjs pour ajouter des effets tactile
npm install --save hammerjsnpm install --save hammerjs

## index.html ajouter icon, https://google.github.io/material-design-icons/
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

## install flex layout
npm install --save @angular/flex-layout

## repo github

## pour installer heroku
npm install -g heroku-cli

git push heroku master