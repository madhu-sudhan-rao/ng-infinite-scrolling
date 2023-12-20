import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() appHighlight = ''

  constructor(
    private el: ElementRef
  ) { 
    // this.el.nativeElement.style.backgroundColor = this.appHighlight || "cyan"
  }
  
  ngOnInit(): void {
      
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }



}
