import { Component } from '@angular/core';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['services.component.scss'],
})
export class ServicesComponent {

	cuts = [
		{ name: "All Haircuts", price: '$70' },
		{ name: 'Bang Trim / Neck Cleanup', price: 'On the House' },
	]

	color = [
		{ name: 'Retouch Color', price: 'Starting at $80' },
		{ name: 'All-Over Color', price: 'Starting at $105' },
		{ name: 'Full Foil', price: 'Starting at $130' },
		{ name: 'Partial Foil', price: 'Starting at $115' },
		{ name: 'T-Foil', price: 'Starting at $95' },
		{ name: 'Balayage', price: 'Starting at $175' },
		{ name: 'Bleach & Tone', price: 'Starting at $140' },
		{ name: 'Toning/Colorbalancing', price: '$45' },
		{ name: 'Express Toning', price: '$30' },
		{ name: 'Conditioning Treatment', price: '$20' },
		{ name: 'Individual Foils', price: 'Up to 10 ($3.75/foil)' },
		{ name: 'Silklift Lightener', price: '$10' },
		{ name: 'Elumen', price: '$20' },
		{ name: 'Color Lock Serum', price: '$15' },
	]

	style = [
		{ name: 'Blow out', price: '$45' },
		{ name: 'Updo', price: '$75' },
		{ name: 'Bridal updo', price: '$95' },
		{ name: 'Styling Lesson', price: '$45' },
	]

	enter() {
	  console.log('Track scroll enter is working!');
	}


}