import { Quote } from '../pages/data/quote.inteface';

export class QuotesService {

    private favoriteQuotes: Quote[] = [];

    addQuoteToFavorites(qoute: Quote) {
        this.favoriteQuotes.push(qoute);
    }

    removeQuoteFromFavorites(qoute: Quote) {
        const index = this.favoriteQuotes.findIndex((elem: Quote) => {
            return elem.id == qoute.id;
        })
        this.favoriteQuotes.splice(index, 1);
    }

    getFavoriteQuotes() {
        return this.favoriteQuotes.slice();
    }

    isQuoteFavorite(quote: Quote): any {
        return this.favoriteQuotes.find((elem: Quote) => {
            return elem.id == quote.id;
        });
    }
}
