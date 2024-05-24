import { Component } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DropdownComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
