import { Component } from '@angular/core';

@Component({
  selector: 'policies',
  templateUrl: './policies.component.html',
  styleUrls: ['policies.component.scss'],
})
export class PoliciesComponent {

	policies = [
		{
			header: 'Walk Ins',
			paragraphs: [
				"CHURCH offers services by appointment only. So holla at'cha girl and call or text (509) 995-5049 to schedule yours.",
			]
		},
		{
			header: 'RUNNING LATE',
			paragraphs: [
				'Sometimes unforeseen circumstances mean running a little tardy to the party. Whether its traffic, a slow moving barista at the coffee shop, or a last minute schedule change, sometimes the universe tries to screw with your day, I’ve been there. If you arrive more than 10 minutes late to your scheduled appointment, I will do everything within my power to accommodate you which may include asking you to reschedule to a different date.',
			]
		},
		{
			header: 'NO-SHOW POLICY/RESCHEDULING/CANCELLATIONS',
			paragraphs: [
				'If you need to change or cancel your appointment, I ask for a full 24 hours notice. I have reserved the time for you; however, I would appreciate the opportunity to make someone else look fly in that time, and a full day’s notice helps me do so.  So if you have a 9am on Friday and wanna reschedule please let me know before 9am on Thursday.',
				'Your appointments are reserved especially for you, but hey, sometimes schedule adjustments are necessary; that’s why I respectfully request a full 24-hour’s notice for cancellations. Less than 24 hour notice may result in a charge equal to 50% of the reserved service amount. And friends, please don’t No-Show me.  I reserve the right to charge 100% of the reserved amount if you don’t show.  These charges must be paid before I will reserve more time on the schedule for you.  So be cool and show up, so I don’t have to make it weird.',
			]
		},
		{
			header: 'DEPOSITS',
			paragraphs: [
				'Cases like color corrections may require a non-refundable deposit of 50% of the estimated cost of the service when you book the appointment.  The deposit will be credited toward your final total.',
			]
		},
	]
}