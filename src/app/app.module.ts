import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
// Map dependencies
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';


/*---------- COMPONENTS ----------*/

// Core
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { SiteFooterComponent } from './core/site-footer/site-footer.component';
// Sections
import { HeroComponent } from './sections/hero/hero.component';
import { ServicesComponent } from './sections/services/services.component';
// Shared
import { GoogleMapComponent } from './shared/google-map/google-map.component';

export const components = [
	AppComponent,
	NavBarComponent,
  SiteFooterComponent,
  HeroComponent,
  ServicesComponent,
  GoogleMapComponent,
]


/*----------  ROUTES  ----------*/

const appRoutes: Routes = [

];


/*----------  MODULES  ----------*/

const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  HttpModule,
  RouterModule.forRoot(appRoutes, { useHash: true }),
  AgmCoreModule.forRoot({
    apiKey: 'AIzaSyDBDh4aMyN0E7sNhRT95I56qjduVCkhsH4'
  }),
  AgmSnazzyInfoWindowModule,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [...modules,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
