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
		console.log(element);
		var current = element.children[1].textContent;
		if ( current == "On") element.children[1].textContent = "Off";
		else element.children[1].textContent = "On";
	}

	goToMessages() {
		this.navCtrl.push(Messages1);
	}

}
