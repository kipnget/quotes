import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorRed]'
})
export class ColorRedDirective {

  constructor (private el:ElementRef) { }
  colorElement() {
    this.el.nativeElement.style.color = "rgb(249, 150, 41)";
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.colorElement();
  }
}
