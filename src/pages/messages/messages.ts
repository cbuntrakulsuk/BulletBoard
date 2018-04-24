import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SendPage } from '../send/send';

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html'
})

export class Messages1 {

  constructor(public navCtrl: NavController) {
	}

	goToSend() {
		this.navCtrl.push(SendPage);
	}

}
