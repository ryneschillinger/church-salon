import { Component, ViewEncapsulation, OnInit, AfterViewInit } from '@angular/core';
import { TweenLite, TimelineMax, TweenMax, Linear, TimelineLite } from "gsap";
declare var $: any;
declare let ScrollMagic: any;

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

  controller = new ScrollMagic.Controller();

  ngAfterViewInit() {
    $(document).ready(function(){
      $('.parallax').parallax();
    });

    // Scroll Triggers
    
    new ScrollMagic.Scene({
      triggerElement: "#animate-1",
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "75%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 0 // move trigger to center of element
    })
      .setClassToggle("#ghost-text-1","visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(this.controller);

    new ScrollMagic.Scene({
      triggerElement: "#animate-2",
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "75%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 0 // move trigger to center of element
    })
      .setClassToggle("#ghost-text-2", "visible") // add class to reveal
      // .addIndicators() // add indicators (requires plugin)
      .addTo(this.controller);

  }
}
