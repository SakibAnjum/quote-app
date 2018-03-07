import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl : AlertController,
    private quoteService: QuotesService
  ) {
  }

  quoteGroup: {
    catrgory: string,
    quotes: Quote[],
    icon: string
  }

  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }

  onAddFav(selQuote: Quote){
    let alert = this.alertCtrl.create({
      title: 'Add Quote',
      message: 'Are u sure?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.quoteService.addQuoteToFav(selQuote);
          }
        },
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }

}
