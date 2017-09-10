import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['nav-bar.component.scss'],
})
export class NavBarComponent {

	links = [
		{
			name: "Services",
			pageAnchor: "services",
			highlighted: false,
		},	
		{
			name: "Salon Info",
			pageAnchor: "info",
			highlighted: true,
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

}