import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Quote} from "../../data/quote.interface";
import quotes from "../../data/quotes";


@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  quoteCollection: {
    catrgory: string,
    quotes: Quote[],
    icon: string
  }[]

  ngOnInit(){
    this.quoteCollection = quotes;
  }


}
