import {Quote} from "../pages/data/quotes.interface";

export class QuotesService{
  // make blank array
  private favoriteQuotes : Quote[] = [];

  // method to add in favourite array
  addToLike(quote: Quote){
    this.favoriteQuotes.push(quote);
  }

  // remove from array
  removeFromLike(quote: Quote){
    const position = this.favoriteQuotes.findIndex((quoteEl:Quote)=>{
      return quoteEl.id == quote.id;
    });
    this.favoriteQuotes.splice(position,1);
  }

  // list of all liked array
  getAllLiked(){
    return this.favoriteQuotes.slice();
  }

  isQuoteLiked(quote: Quote)
  {
    return this.favoriteQuotes.find((quoteEl: Quote) => {
          return quoteEl.id == quote.id;
    });
  }

}
