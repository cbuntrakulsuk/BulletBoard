import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Messages1 } from '../messages/messages';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {

  }

	switchNotifications( element ) {
		var change = element.firstChild.nextElementSibling;
		console.log(change);
		change = change.nextElementSibling;
		console.log(change);
		var current = change.textContent;
		if ( current == "On") change.textContent = "Off";
		else change.textContent = "On";
	}

	goToMessages() {
		this.navCtrl.push(Messages1);
	}

}
