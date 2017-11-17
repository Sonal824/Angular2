import {Component} from '@angular/core';
import {QuotesService} from "../../services/quotes";
import {Quote} from "../data/quotes.interface";
import {ModalController,ViewController} from "ionic-angular";
import {QuotePage} from "../quote/quote";

@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage{
  allLikedData : {};
  constructor(private quotesService: QuotesService,private modalCtrl: ModalController) {}

  ionViewWillEnter()
  {
    this.allLikedData = this.quotesService.getAllLiked();
  }

  onViewQuote(quote: Quote)
  {
    const modal = this.modalCtrl.create(QuotePage,quote);
    modal.present();
    modal.onDidDismiss( (remove :boolean) => {

        if(remove)
        {
          this.quotesService.removeFromLike(quote);
          this.allLikedData = this.quotesService.getAllLiked();
        }
    });
  }

  onRemoveFromFavourite(quote:Quote)
  {
    this.quotesService.removeFromLike(quote);
    this.allLikedData = this.quotesService.getAllLiked();
  }

}
