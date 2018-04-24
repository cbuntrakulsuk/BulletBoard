import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ViewPostPage } from '../view-post/view-post';
import { ViewAuthorPage } from '../view-author/view-author';

@Component({
  selector: 'page-pinned',
  templateUrl: 'pinned.html'
})

export class PinnedPage {

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
        sponsored: false,
        title: 'Lost Doggo',
        location: '1245 Hollywood Hills, CA 52132',
        description: 'Please help, I have recently lost my doggo, it is a shiba doggo named Doge. The last place I saw him was inside my house, he must of gotten through my fence somehow. If anyone finds him please message me. I will reward the person who find the dog for me with 5 million doge coins',
        icon: 'help-circle',
        img: 'assets/imgs/lost-doggo.jpg',
        author: { name: 'Alfonso Ribeiro', description: 'An American actor, director, game show host and a dancer Alfonso Lincoln Ribeiro, Sr. is most known among people as Carlton Banks on the NBC sitcom The Fresh Prince of Bel-Air.', avatar: 'assets/imgs/alfonso-ribeiro.jpg'},
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
