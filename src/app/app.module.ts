import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TabsPage} from "../pages/tabs/tabs";
import {FavoritePage} from "../pages/favorite/favorite";
import {AboutusPage} from "../pages/aboutus/aboutus";
import {ContactusPage} from "../pages/contactus/contactus";
import {VideosPage} from "../pages/videos/videos";
import {VideolistPage} from "../pages/videolist/videolist";
import {QuotesService} from "../services/quotes";
import {QuotePage} from "../pages/quote/quote";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    FavoritePage,
    AboutusPage,
    ContactusPage,
    VideosPage,
    VideolistPage,
    QuotePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    FavoritePage,
    AboutusPage,
    ContactusPage,
    VideosPage,
    VideolistPage,
    QuotePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
     QuotesService
  ]
})
export class AppModule {}
