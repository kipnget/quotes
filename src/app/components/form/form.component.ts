import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quotes } from '../../classes/quotes';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  newQuote =new Quotes (0,"","","", 0, 0, false, true, new Date());
  @Output() addQuote=new EventEmitter<Quotes>();
    
  submitQuote(){
    this.addQuote.emit(this.newQuote);
    this.newQuote =new Quotes (0,"","","", 0, 0, false, true, new Date());
  }

  ngOnInit() {
  }

}
