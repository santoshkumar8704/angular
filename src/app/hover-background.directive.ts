import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverBackground]'
})
export class HoverBackgroundDirective {

  constructor(private el:ElementRef,private renderer:Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.ChangeBackground("yellow")
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.ChangeBackground("red")
  }

  private ChangeBackground(color:string){
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor',color)
  }

}
