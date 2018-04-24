import { Component, ElementRef, ViewChild  } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { GoogleMaps,GoogleMap,LatLng,GoogleMapsEvent } from '@ionic-native/google-maps';
//import { AddPage } from '../add/add';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class LocationPage {

  @ViewChild('map') mapElement: ElementRef;
  private map:GoogleMap;
  private location:LatLng;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private platform: Platform,
    private googleMaps: GoogleMaps) {
    this.location = new LatLng(34.2410366, -118.52767449999999);

  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      let element = this.mapElement.nativeElement;
      this.map = this.googleMaps.create(element);
   
      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        let options = {
          target: this.location,
          zoom: 14
        };
   
        this.map.moveCamera(options);
        this.addMarker();
      });
    });
  }

  addMarker() {
    this.map.addMarker({
      title: 'Current Location',
      icon: 'red',
      draggable: true,
      animation: 'DROP',
      position: {
        lat: this.location.lat,
        lng: this.location.lng
      }
    })
    .then(marker => {
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        alert('Current Location Set');
      });
    });
  }

  close() {
    this.navCtrl.pop();
  }

  save() {
    this.navCtrl.pop();
  }

}
