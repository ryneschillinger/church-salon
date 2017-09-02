import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';


/*---------- COMPONENTS ----------*/

import {NavBarComponent} from './core/nav-bar/nav-bar.component';
import {SiteFooterComponent} from './core/site-footer/site-footer.component';
import {HeroComponent} from './sections/hero/hero.component';

export const components = [
	AppComponent,
	NavBarComponent,
  SiteFooterComponent,
  HeroComponent,
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
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [...modules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
