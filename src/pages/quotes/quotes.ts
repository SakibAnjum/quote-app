import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";


@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  x:Quote[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController
  ) {}


  ionViewDidLoad(){
    console.log(this.navParams.get('text'))
    this.x = this.navParams.data;

  }



  onClose(){
    this.viewCtrl.dismiss();
  }


}
