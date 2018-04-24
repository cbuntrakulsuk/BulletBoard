import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { PinnedPage } from '../pinned/pinned';
import { Messages1 } from '../messages/messages';

@Component({
	selector: 'page-profile',
	templateUrl: 'profile.html'
})
export class ProfilePage {

	constructor(public alertCtrl: AlertController, public navCtrl: NavController) {

	}

	switchNotifications(element) {
		var change = element.firstChild;
		while (change.nextElementSibling != null) change = change.nextElementSibling;
		var current = change.textContent;
		if (current == "On") change.textContent = "Off";
		else change.textContent = "On";
	}

	setHomeLocation(element) {
		let alert = this.alertCtrl.create({
			title: 'Home Location',
			message: 'Set Home to current location?',
			buttons: [
				{
					text: "OK",
					handler: () => {
						var change = element.firstChild;
						while (change.nextElementSibling != null) change = change.nextElementSibling;
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

	goToPosts() {
		this.navCtrl.push(PinnedPage);

	}
	goToMessages() {
		this.navCtrl.push(Messages1);
	}

}
