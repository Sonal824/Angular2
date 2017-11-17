import { Component, OnInit } from '@angular/core';
import {NavParams} from "ionic-angular";
import {Quote} from "../data/quotes.interface";
import {AlertController} from "ionic-angular";
import {QuotesService} from "../../services/quotes";
import quotes from "../data/quotes";


@Component({
  selector: 'page-videolist',
  templateUrl: 'videolist.html',
})
export class VideolistPage implements OnInit{
  quoteGroup : {category:string,quotes: Quote[],icon:string}[];
  constructor(
    private navparams: NavParams,
    private alertCtrl: AlertController,
    private quotesService: QuotesService
    ){}

  ngOnInit()
  {
    this.quoteGroup = this.navparams.data;
  }

  OnAddToLike(selectedquote: Quote)
  {
    let alert = this.alertCtrl.create({
      title: 'Add Quote',
      message: 'Are you sure you want to add the Quote?',
      buttons: [
        {
          text:'Yes, go ahead',
          handler:() => {
            this.quotesService.addToLike(selectedquote);
          }
        },
        {
          text:'No, I changed my mind!',
          role:'cancel',
          handler:() => {
            console.log('cancelled');
          }
        }
        ]
    });
    alert.present();
  }

  OnRemoveLike(quote: Quote)
  {
    this.quotesService.removeFromLike(quote);
  }
  isLiked(quote: Quote)
  {
    return this.quotesService.isQuoteLiked(quote);
  }

}
