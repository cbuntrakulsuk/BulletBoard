import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { AddPage } from '../add/add';
import { HomePage } from '../home/home';
import { PinnedPage } from '../pinned/pinned';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MapPage;
  tab3Root = AddPage;
  tab4Root = PinnedPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
