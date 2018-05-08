import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { ViewPostPage } from '../view-post/view-post';
import { ViewAuthorPage } from '../view-author/view-author';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  showSearch: boolean;
  posts: Array<{
    sponsored: boolean,
    title: string,
    location: string, 
    description: string,
    icon: string, 
    img: string,
    author: any, 
    posted: Date
  }>;

  constructor(public navCtrl: NavController) {
    this.showSearch = false;
    this.intializeItems();
  }

  intializeItems():void {
    this.posts = [
			{
				sponsored: true,
        title: 'Knowledge',
        location: '1233 Hollywood Hills, CA 52132',
        description: 'Here in my garage, just bought this new Lamborghini here. It’s fun to drive up here in the Hollywood hills. But you know what I like more than materialistic things? Knowledge.',
        icon: 'notifications',
        img: 'assets/imgs/garage.jpg',
        author: { name: 'Tai Lopez', description: 'Investor, partner, and advisor to over 20 multi-million dollar businesses. Through his popular book club and podcasts The Tai Lopez Show shares advice on how to achieve health, wealth, love, and happiness with 1.4 million people in 40 countries. The Tai Lopez Show, gets around 800,000 downloads per month.', avatar: 'assets/imgs/tai-lopez.jpg'},
        posted: new Date()
      },
      {
				sponsored: true,
        title: 'Road Closure',
        location: '1242 Hollywood Hills, CA 52132',
        description: 'As promised the Pavement Company will come and repave the roads. While we are doing this please note that the street will be closed from 11:00am to 3:00pm. This will happen next week on Tuesday so plan ahead. Thank you.',
        icon: 'notifications',
        img: 'assets/imgs/road-closure.jpg',
        author: { name: 'John Doe', description: 'An average joe is a symbolization of an average American person (generally male). The term was used mainly in the late 90s - early 2000s, when the majority of America\'s population consisted of middle class citizens. Usually falls under the following traits: considered not to be dumb nor smart, follows any kind of sports (and also drinks heavily when their favourite team is not doing well), works five or six days a week (usually as a white collar worker), and comes home every night to sit on their sofas and watch TV.', avatar: 'assets/imgs/john-doe.jpg'},
        posted: new Date()
      },
			{
				sponsored: false,
				title: 'Lost Dog',
				location: '1245 Hollywood Hills, CA 52132',
				description: 'Please help, I have recently lost my dog, an Australian Shepard named Charlie. The last place I saw him was inside my house. I left the door open as I was putting boxes in and he must have run out. If anyone finds him please message me. I will reward the person who finds him.',
				icon: 'help-circle',
				img: 'assets/imgs/lost-doggo.jpg',
				author: { name: 'Chad Buntrakulsuk', description: 'A guy new to the neighborhood. Unfortunately, I need some help.', avatar: 'assets/imgs/alfonso-ribeiro.jpg'},
				posted: new Date()
			}
    ];
  }

  getPosts(event: any):void {
    this.intializeItems();

    let val = event.target.value;

    if (val && val.trim() != '') {
      this.posts = this.posts.filter((post) => {
        return (post.title.toLowerCase().indexOf(val.toLowerCase()) > -1) 
          || (post.description.toLowerCase().indexOf(val.toLowerCase()) > -1)
          || (post.location.toLowerCase().indexOf(val.toLowerCase()) > -1)
          || (post.author.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  viewPost(event: any, post: any):void {
    this.navCtrl.push(ViewPostPage, {
      data: post
    });
  }

  viewAuthor(event: any, author: any):void {
    this.navCtrl.push(ViewAuthorPage, {
      data: author
    });
  }

  toggleSearch():void {
    this.showSearch = !this.showSearch;
  }

}
