import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) {

  }

  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Post Created!',
      message: 'Successfully',
      buttons: ['Ok']
    });

    alert.present()
    alert.onDidDismiss(() => {
      this.navCtrl.push(HomePage)
    })

  }

}
