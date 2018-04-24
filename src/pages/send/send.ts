import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-send',
  templateUrl: 'send.html'
})
export class SendPage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) {
		let sentMessages = 0;
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
