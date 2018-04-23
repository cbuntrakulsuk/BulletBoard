import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: Array<{
    sponsored: boolean,
    title: string, 
    description: string,
    icon: string, 
    author: string, 
    posted: Date
  }>;

  constructor(public navCtrl: NavController) {
    this.posts = [
      {
        sponsored: true,
        title: 'Here in my garage (Part 1)',
        description: 'Here in my garage, just bought this new Lamborghini here. It’s fun to drive up here in the Hollywood hills. But you know what I like more than materialistic things? Knowledge.',
        icon: 'notifications',
        author: 'Tai Lopez',
        posted: new Date()
      }
    ];
  }

}
