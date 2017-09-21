import { Component } from '@angular/core';
import { ServicesComponent } from '../../sections/services/services.component';
declare var $:any;

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['nav-bar.component.scss'],
})
export class NavBarComponent {

	mobileMenuOpen = false;

	links = [
		{
			name: "Services",
			pageAnchor: "services",
			highlighted: false,
		},	
		{
			name: "Salon Info",
			pageAnchor: "info",
			highlighted: false,
		},
		{
			name: "The Stylist",
			pageAnchor: "stylist",
			highlighted: false,
		},
		{
			name: "Policies",
			pageAnchor: "policies",
			highlighted: false,
		},
	]

	toggleScroll() {
		if (this.mobileMenuOpen === true) {
			let html = $('html'); 
			let body = $('body'); 
		    var initWidth = body.outerWidth();
		    var initHeight = body.outerHeight();

		    var scrollPosition = [
		        self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
		        self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
		    ];
		    html.data('scroll-position', scrollPosition);
		    html.data('previous-overflow', html.css('overflow'));
		    html.css('overflow', 'hidden');
		    window.scrollTo(scrollPosition[0], scrollPosition[1]);   

		    var marginR = body.outerWidth()-initWidth;
		    var marginB = body.outerHeight()-initHeight; 
		    body.css({'margin-right': marginR,'margin-bottom': marginB});
		}
		else {
			let html = $('html');
		    let body = $('body');
		    html.css('overflow', html.data('previous-overflow'));
		    let scrollPosition = html.data('scroll-position');
		    window.scrollTo(scrollPosition[0], scrollPosition[1]);    

		    body.css({'margin-right': 0, 'margin-bottom': 0});
		}
	}


}