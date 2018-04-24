import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
//import { HomePage } from '../home/home';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';
import { LocationPage } from '../location/location';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
  providers: [[Camera]]
})

export class AddPage {
  today
  public image: string;
  public base64Image: string;
  constructor(public alertCtrl: AlertController, public navCtrl: NavController,private camera: Camera, private domSanitizer: DomSanitizer) {
  }

  accessGallery(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL,
      targetHeight: 300,
      targetWidth: 300,
     }).then((imageData) => {
       this.base64Image = 'data:image/jpeg;base64,'+imageData;
      }, (err) => {
       console.log(err);
     });
   }

  takePhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: true,
      targetHeight: 300,
      targetWidth: 300,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        this.displayErrorAlert(err);
      });
  }

  displayErrorAlert(err){
    console.log(err);
    let alert = this.alertCtrl.create({
       title: 'Error',
       subTitle: 'Error while trying to capture picture',
       buttons: ['OK']
     });
     alert.present();
  }
  

  doAlert() 
  {
    let alert = this.alertCtrl.create({
      title: 'Post Created!',
      message: 'Successfully',
      buttons: ['Ok']
    });

    alert.present()
    alert.onDidDismiss(() => 
    {
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
      this.navCtrl.setRoot(AddPage)
    })

  }

  doConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Delete?',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Agree clicked');
            alert.onDidDismiss(() => 
            {
              this.navCtrl.setRoot(this.navCtrl.getActive().component);
              this.navCtrl.setRoot(AddPage)
            })
          }
        }
      ]
    });

    alert.present();
    
  }

  saveDraft() {
    let alert = this.alertCtrl.create({
      title: 'Save Draft',
      message: 'Message saved as draft.',
      buttons: ['Ok']
    });
    alert.present();
  }

  getLocation() {
    this.navCtrl.push(LocationPage)
  }

}
