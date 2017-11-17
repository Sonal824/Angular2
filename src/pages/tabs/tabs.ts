import {Component} from "@angular/core";
import {HomePage} from "../home/home";
import {FavoritePage} from "../favorite/favorite";
import {ContactusPage} from "../contactus/contactus";
import {AboutusPage} from "../aboutus/aboutus";
import {VideosPage} from "../videos/videos";
import {NavParams} from "ionic-angular";

@Component({
  selector:'page-tabs',
  template:`
    <ion-tabs [selectedIndex]="myIndex">
      <ion-tab [root]="homePage" tabTitle="Home" tabIcon="home"></ion-tab>
      <ion-tab [root]="favoritePage" tabTitle="Favourite" tabIcon="star"></ion-tab>
      <ion-tab [root]="contactusPage" tabTitle="Contact" tabIcon="contact"></ion-tab>
      <ion-tab [root]="aboutusPage" tabTitle="About" tabIcon="information-circle"></ion-tab>
      <ion-tab [root]="videosPage" tabTitle="Video" tabIcon="videocam"></ion-tab>
    </ion-tabs>
  `
})

export class TabsPage{
  myIndex: number;
  homePage = HomePage;
  favoritePage = FavoritePage;
  contactusPage = ContactusPage;
  aboutusPage = AboutusPage;
  videosPage = VideosPage;

  constructor(navParams: NavParams) {
    // set the default index to 0, the first tab
    this.myIndex = 0;
    if (navParams.data.index) this.myIndex = navParams.data.index;

  }

}
