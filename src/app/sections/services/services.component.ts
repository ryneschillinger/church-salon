import { Component } from '@angular/core';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['services.component.scss'],
})
export class ServicesComponent {

	cuts = [
		{ name: "Women's Haircut", price: '$65' },
		{ name: "Men's Haircut", price: '$43' },
		{ name: 'Bang Trim / Neck Cleanup', price: 'On the House' },
	]

	color = [
		{ name: 'Retouch Color', price: 'Starting at $70' },
		{ name: 'All-Over Color', price: 'Starting at $95' },
		{ name: 'Full Foil', price: 'Starting at $120' },
		{ name: 'Partial Foil', price: 'Starting at $105' },
		{ name: 'T-Foil', price: 'Starting at $90' },
		{ name: 'Balayage', price: 'Starting at $150' },
		{ name: 'Bleach & Tone', price: 'Starting at $120' },
		{ name: 'Toning/Colorbalancing', price: '$35' },
		{ name: 'Express Toning', price: '$25' },
		{ name: 'Conditioning Treatment', price: '$20' },
		{ name: 'Brazilian Blowout', price: 'Price Varies' },
	]
}