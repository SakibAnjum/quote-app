import {Quote} from "../data/quote.interface";

export class QuotesService{
  private favouriteQuotes: Quote[] = [];

  addQuoteToFav(quote: Quote){
    this.favouriteQuotes.push(quote);
    console.log(this.favouriteQuotes)
  }

  removeQuoteToFav(quote: Quote){

    const pos = this.favouriteQuotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id = quote.id;
    })
    console.log(pos)
    this.favouriteQuotes.splice(pos,1);
  }


  getFavQuotes(){
    return this.favouriteQuotes.slice();
  }

}
