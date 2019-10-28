import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {
  Quotes
} from '../../classes/quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  quotes = [
    new Quotes(1, 'Bill','Gates','When a person becomes grateful to his sources, suddenly he becomes fearless and the light of abundance...', 0, 0, false, false, new Date(2019, 10, 24)),
    new Quotes(1, 'Mark','Zuck','In life, you win some and you then lose some, that�s the way it has always been. However, there are a...', 0, 0, false, false, new Date(2019, 5, 6)),
    new Quotes(1, 'larry','page','Most people make wishes but only a few of them make it work in real life. When life asks many difficult...', 0, 0, false, false, new Date(2019, 6, 17)),
    new Quotes(1, 'bill','clinton',' No wise man ever wished to be younger.', 0, 0, false, false, new Date(2019, 4, 14)),
    new Quotes(1, 'kip','nehemiah',' Every man desires to live long, but no man wishes to be old.', 0, 0, false, false, new Date(2019, 3, 10))
  ]

  @Input() quote: Quotes;
  @Output() isToDelete = new EventEmitter < boolean > ();

  deleteMe(index) {
    this.quotes.splice(index, 1);
  }

  /*Function to add new quote*/
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.unshift(quote);
    console.log(quote);
    console.log(this.quotes);
  }

  /*Function to toggle additional details*/
  showQuoteDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
    console.log(this.quotes[index]);
  }

  /* Function to Upvote and Downvote*/
  onLike(index) {
    this.quotes[index].touchLike = true;
    if (this.quotes[index].likeState) {
      this.quotes[index].likeNumber +=  1;
      this.quotes[index].likeState = false;
      
      //User can't dislike and like at the same time, so reset dislike
      if (!this.quotes[index].dislikeState){
        this.quotes[index].dislikeNumber -=  1;
        this.quotes[index].dislikeState = true;
      }
    } else {
      this.quotes[index].likeNumber -=  1;
      this.quotes[index].likeState = true;
    }
  }
  onDislike(index) {
    this.quotes[index].touchDislike = true;
    if (this.quotes[index].dislikeState) {
      this.quotes[index].dislikeNumber +=  1;
      this.quotes[index].dislikeState = false;
      //User can't dislike and like at the same time, so reset like
      if (!this.quotes[index].likeState){
        this.quotes[index].likeNumber -=  1;
        this.quotes[index].likeState = true;
      }
    } else {
      this.quotes[index].dislikeNumber -=  1;
      this.quotes[index].dislikeState = true;
    }
  }
  mostLikes(index) {
      const votes = [];
      this.quotes.forEach(quote => votes.push(quote.likeNumber));
      if (this.quotes[index].likeNumber === Math.max(...votes)) {
        return true;
      }
  }

  ngOnInit() {}

}
