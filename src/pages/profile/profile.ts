import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Messages1 } from '../messages/messages';

@Component({
	selector: 'page-profile',
	templateUrl: 'profile.html'
})
export class ProfilePage {

	constructor(public alertCtrl: AlertController, public navCtrl: NavController) {

	}

	switchNotifications(element) {
		var change = element.firstChild.nextElementSibling;
		console.log(change);
		change = change.nextElementSibling;
		console.log(change);
		var current = change.textContent;
		if (current == "On") change.textContent = "Off";
		else change.textContent = "On";
	}

	setHomeLocation(element) {
		let alert = this.alertCtrl.create({
			title: 'Set Home Location',
			message: 'Home will be set to current location!',
			buttons: [
				{
					text: "OK",
					handler: () => {
						var change = element.firstChild;
						change = change.nextElementSibling;
						change = change.nextElementSibling;
						change.textContent = "Northridge, CA"
					}
				},
				{
					text: "Cancel"
				}
			]
		});
		alert.present();
	}

	goToMessages() {
		this.navCtrl.push(Messages1);
	}

}
