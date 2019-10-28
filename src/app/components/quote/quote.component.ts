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
