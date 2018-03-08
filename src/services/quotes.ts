import {Quote} from "../data/quote.interface";

export class QuotesService{
  private favouriteQuotes: Quote[] = [];

  addQuoteToFav(quote: Quote){
    this.favouriteQuotes.push(quote);
  }

  removeQuoteToFav(quote: Quote){

    const pos = this.favouriteQuotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
   this.favouriteQuotes.splice(pos,1);
  }


  getFavQuotes(){
    return this.favouriteQuotes.slice();
  }


  findFev(quote: Quote){
    const pos = this.favouriteQuotes.find((el) => {
      return el.id == quote.id;
    })

    return pos;
  }


}
