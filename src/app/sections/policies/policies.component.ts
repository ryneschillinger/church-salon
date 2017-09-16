import { Component } from '@angular/core';

@Component({
  selector: 'policies',
  templateUrl: './policies.component.html',
  styleUrls: ['policies.component.scss'],
})
export class PoliciesComponent {

	policies = [
		{
			header: 'Walk-Ins',
			paragraphs: [
				'Walk-ins are not welcome. Fuck off.',
			]
		},
		{
			header: 'Running Late/Rescheduling',
			paragraphs: [
				'We understand that occasionally, an unforeseen circumstance means running late or a schedule change. In the event that you arrive more than 10 minutes late to   scheduled appointment, we will do everything within our power to accommodate you.',
				'If you need to change or cancel your appointment, we ask that you provide us with 48-hour notice. We have reserved this time for you; however, we would love the opportunity to offer it to another client if you are unable to make it. This means everyone has a better chance of getting the appointment time they need.',
			]
		},
		{
			header: 'No-show policy/Cancellations',
			paragraphs: [
				'Your appointments are very important to us and are reserved especially for you. We understand that sometimes schedule adjustments are necessary; therefore, we respectfully request at least 24-hour’s notice for cancellations. Please understand that when you forget or cancel your appointment without giving enough notice, we miss the opportunity to fill that time. Less than 24 hour notice may result in a charge equal to 50% of the reserved service amount. No-shows may be charged 100% of the reserved amount.',
			]
		},
		{
			header: 'Deposit Policy',
			paragraphs: [
				'Starting March 15, a $50 nonrefundable deposit is required in order to reserve your appointment upon scheduling any services that requires 2+hours. This deposit will be credited toward service fees.',
			]
		},
	]
}