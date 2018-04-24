import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { MapPage } from '../pages/map/map';
import { AddPage } from '../pages/add/add';
import { HomePage } from '../pages/home/home';
import { PinnedPage } from '../pages/pinned/pinned';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { Messages1 } from '../pages/messages/messages';
import { ViewPostPage } from '../pages/view-post/view-post';
import { ViewAuthorPage } from '../pages/view-author/view-author';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MapPage,
    AddPage,
    HomePage,
    PinnedPage,
    ProfilePage,
		TabsPage,
		Messages1,
    ViewPostPage,
    ViewAuthorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapPage,
    AddPage,
    HomePage,
    PinnedPage,
    ProfilePage,
		TabsPage,
		Messages1,
    TabsPage,
    ViewPostPage,
    ViewAuthorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
