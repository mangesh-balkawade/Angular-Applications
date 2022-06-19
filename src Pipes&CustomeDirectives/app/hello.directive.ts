import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective {

  constructor
  (private eobj:ElementRef) 
  { 
  }

  @HostListener("mouseenter")onmouseenter()
  {
    this.eobj.nativeElement.style.background='red';
  }

  @HostListener("mouseleave")onmouseleave()
  {
    this.eobj.nativeElement.style.background='blue';
  }



}
