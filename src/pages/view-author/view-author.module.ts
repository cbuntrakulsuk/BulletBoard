import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewAuthorPage } from './view-author';

@NgModule({
  declarations: [
    ViewAuthorPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewAuthorPage),
  ],
})
export class ViewAuthorPageModule {}
