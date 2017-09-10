import { Component } from '@angular/core';

@Component({
  selector: 'google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent {

	// Map
	lat: number = 47.6270081;
	lng: number = -117.4005177;
	zoom: number = 16;
	iconUrl = {
		url: '../../assets/map-marker.svg',
		scaledSize: {
		  height: 60,
		  width: 85
		}
	}

	//Info Window
	padding: string = '0 1.5rem 1.5rem 1.5rem';
	borderRadius: string = '0';

	styles = [
    {elementType: 'geometry', stylers: [{color: '#F7F7F2'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#F7F7F2'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#2C2C2C'}]},
    {
      featureType: 'poi',
      stylers: [{ visibility: "off" }]   
    },
    {
      featureType: 'transit',
      stylers: [{ visibility: "off" }]   
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#eddbb3'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: '#F7F7F2'}]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{color: '#000000'}]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#F7F7F2'}]
    },
    {
      featureType: 'water',
      stylers: [{ visibility: "off" }]   
    },
  ]

}