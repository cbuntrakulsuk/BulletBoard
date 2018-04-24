import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-author',
  templateUrl: 'view-author.html',
})
export class ViewAuthorPage {
  author: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.author = navParams.get('data');
  }

}
