import { Component } from '@angular/core';

@Component({
  selector: 'stylist',
  templateUrl: './stylist.component.html',
  styleUrls: ['stylist.component.scss'],
})
export class StylistComponent {

	avys = [
		{
			name: 'Sheila Lastname',
			quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque eget ante nec porttitor. Etiam cursus id lacus eget posuere. Curabitur faucibus mi non vehicula faucibus. Etiam dolor ex, congue sed massa sit amet, efficitur eleifend urna.',
			photo: '',
			selected: true,
		},
		{
			name: 'Anna Peters',
			quote: 'Quisque arcu tellus, iaculis sed tempus et, interdum non elit. Nulla nulla nibh, semper eget lacinia in, imperdiet vitae lectus. Quisque vitae erat at eros malesuada volutpat eget vitae lorem.',
			photo: '',
			selected: false,
		},
		{
			name: 'Third Person',
			quote: 'Quisque nibh nulla, accumsan eu justo quis, lacinia fermentum nisi. Vivamus erat enim, tempus sit amet risus sed, aliquet fermentum lorem. Curabitur consectetur libero ut felis convallis, vitae aliquam libero faucibus. Aliquam erat volutpat. Duis sed leo viverra, iaculis mauris a, tincidunt purus.',
			photo: '',
			selected: false,
		},
	]

	currentQuote = {
		quote: this.avys[0].quote,
		name: this.avys[0].name,
	}

	selectAvy(i) {
		for (let j=0; j < this.avys.length; j++) {
			this.avys[j].selected = false;
		}
		this.avys[i].selected = true;
		this.currentQuote.quote = this.avys[i].quote;
		this.currentQuote.name = this.avys[i].name;
	}
}