import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";

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

  onAddFav(quote){
   const alert = this.alertCtrl.create({
     title: 'fsffsfd'
   })
  }

}
