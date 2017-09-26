import { Component, ViewEncapsulation, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
  	'./app.component.css',
    '../styles/normalize.css',
  	'../styles/church_fonts.scss',
  	'../styles/church_global-styles.scss',
  	'../styles/church_vars.scss',
    '../styles/church_grid.scss',
    '../styles/font-awesome/font-awesome.scss',
    '../../node_modules/snazzy-info-window/dist/snazzy-info-window.css',
  ],
  encapsulation: ViewEncapsulation.None 
})
export class AppComponent {
  title = 'app';

  // enter() {
  //   console.log('Track scroll enter is working!');
  // }
  
  // leave() {
  //   console.log('Track scroll leave is working too!');
  // }

  ngAfterViewInit() {
    $(document).ready(function(){
      $('.parallax').parallax();
    });
  }

  
}
