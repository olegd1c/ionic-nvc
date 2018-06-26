import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { QuotesService } from '../../services/qoutes';
import { Quote } from '../data/quote.inteface';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  public quotes: Quote[] = []

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private quotesService: QuotesService,
  ) {}

  ionViewWillEnter() {
    
    this.getGuotes();
  }

  private getGuotes() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  swipe(event) {
    //if(event.direction === 2) {
    //  this.navCtrl.parent.select(1);
    //}
  }

  deleteItem(quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
    this.getGuotes();
  }
}
