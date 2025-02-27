import { Component } from '@angular/core';
import { HoverBackgroundDirective } from '../hover-background.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  imports: [HoverBackgroundDirective,CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  isActive = true
  isHidden = true
  disabled = true

}
