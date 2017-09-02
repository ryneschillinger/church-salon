import { Component } from '@angular/core';

@Component({
  selector: 'site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['site-footer.component.scss'],
})
export class SiteFooterComponent {

	// Get current year

	currentYear : any;
	getYear() {
		let date = new Date();
		let year = date.getFullYear();
		return year;
	}
	constructor() {
		this.currentYear = this.getYear(); 
	}     


}