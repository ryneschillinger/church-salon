import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
  	'./app.component.css',
    '../styles/normalize.css',
  	'../styles/church_global-styles.scss',
  	'../styles/church_vars.scss',
  	'../styles/church_fonts.scss',
  ],
  encapsulation: ViewEncapsulation.None 
})
export class AppComponent {
  title = 'app';
}
