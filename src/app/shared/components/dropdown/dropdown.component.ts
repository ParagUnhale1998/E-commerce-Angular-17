import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

export const toggleAnimation = trigger('toggleAnimation', [
  state('void', style({ height: '0px', opacity: 0 })),
  state('*', style({ height: '*', opacity: 1 })),
  transition('void <=> *', animate('300ms ease-in-out'))
]);
@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  animations: [toggleAnimation]

})
export class DropdownComponent {
  @Input() title!: string;
  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
