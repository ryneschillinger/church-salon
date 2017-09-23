import { Component } from '@angular/core';

@Component({
  selector: 'stylist',
  templateUrl: './stylist.component.html',
  styleUrls: ['stylist.component.scss'],
})
export class StylistComponent {

	avys = [
		{
			name: 'Sheila',
			quote: 'Corinne Brown is an artist. I love to give her free reign with my hair and every single time I leave looking and feeling amazing. She is so incredibly talented and her work is inspiring. I trust her completely.',
			photo: 'avy_sheila.jpg',
			selected: true,
		},
		{
			name: 'Anna',
			quote: "Beyond being a masterful technician, Corinne's innate sense of style and an \"it\" factor I'm never going to be able to accurately convey in words makes her your hair's new best friend. I feel my most beautiful and at ease in my own skin after one of her cuts; my look is fairly natural and low maintenance but her attention to detail and subtle tweaks make it feel modern, effortless, sexy. I honestly can't imagine letting anyone else near my hair.",
			photo: 'avy_anna.jpg',
			selected: false,
		},
		{
			name: 'Ryne',
			quote: 'I always feel a little guilty when Corinne cuts my hair. Asking a world-class colorist to clean up your fade is kind of like asking Bobby Flay to serve you some chicken nuggets. Fortunately, Corinne tackles every challenge—even the simple and less-colorful ones—with an unrivaled sense of professionalism and attention to detail. I feel like the most handsome version of myself every time I leave her stylist chair.',
			photo: 'avy_ryne.jpg',
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