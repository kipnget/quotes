import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private el:ElementRef ) { }
  highlighterElement(){
    this.el.nativeElement.style.border= '2px solid';
    this.el.nativeElement.style.color='#000';
    this.el.nativeElement.style.boxshadow='0px 0px 9px 9px rgba(0, 0, 0, 0.3)';
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.highlighterElement()
  }
}
