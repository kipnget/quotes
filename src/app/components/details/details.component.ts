import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quotes } from '../../classes/quotes'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() quote: Quotes;

  constructor() { }

  ngOnInit() {
  }

}
