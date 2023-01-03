import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
// Map dependencies
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
// Page Scroll
import { Ng2PageScrollModule } from 'ng2-page-scroll';
// Track Scroll Position
import { Ng2TrackScrollModule } from 'ng2-track-scroll'; 



/*---------- COMPONENTS ----------*/

// Core
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { SiteFooterComponent } from './core/site-footer/site-footer.component';
// Sections
import { HeroComponent } from './sections/hero/hero.component';
import { ServicesComponent } from './sections/services/services.component';
import { MulletGangComponent } from './sections/mullet-gang/mullet-gang.component';
import { SalonInfoComponent } from './sections/salon-info/salon-info.component';
import { StylistComponent } from './sections/stylist/stylist.component';
import { PoliciesComponent } from './sections/policies/policies.component';
import { BookNowComponent } from './sections/book-now/book-now.component';
// Shared
import { GoogleMapComponent } from './shared/google-map/google-map.component';

export const components = [
	AppComponent,
	NavBarComponent,
  SiteFooterComponent,
  HeroComponent,
  ServicesComponent,
  MulletGangComponent,
  SalonInfoComponent,
  StylistComponent,
  PoliciesComponent,
  BookNowComponent,
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
  RouterModule.forRoot(appRoutes, { useHash: false }),
  AgmCoreModule.forRoot({
    apiKey: 'AIzaSyDBDh4aMyN0E7sNhRT95I56qjduVCkhsH4'
  }),
  AgmSnazzyInfoWindowModule,
  Ng2PageScrollModule,
  Ng2TrackScrollModule.forRoot()
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...modules
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class AppModule { }
