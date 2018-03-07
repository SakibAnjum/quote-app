import { Component } from '@angular/core';
import {IonicPage, ModalController} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";

@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {
  quotes: Quote[];

  constructor(
    private quoteService: QuotesService,
    private modalCtrl: ModalController
  ) {}

  ionViewWillEnter(){
    this.quotes = this.quoteService.getFavQuotes();
  }

  onViewQuote( quote: Quote){
    const modal = this.modalCtrl.create("QuotesPage",quote);
    modal.present();


  }

}
