import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-send',
  templateUrl: 'send.html'
})
export class SendPage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) {
  }

	cancelMessage() {
    let alert = this.alertCtrl.create({
      title: 'Leave Page?',
      message: 'All data will be lost!',
      buttons: ['Ok']
    });

    alert.present()
    alert.onDidDismiss(() => {
			this.navCtrl.pop();
		})
	}
  sendMessage() {
    let alert = this.alertCtrl.create({
      title: 'Message Sent!',
      message: 'Successfully',
      buttons: ['Ok']
    });

    alert.present()
    alert.onDidDismiss(() => {
			this.navCtrl.pop();
			this.navCtrl.pop();
    })

  }

}
