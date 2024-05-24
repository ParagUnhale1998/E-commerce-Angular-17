import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-morque-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './morque-slider.component.html',
  styleUrl: './morque-slider.component.scss'
})
export class MorqueSliderComponent {
  spanArray = Array.from(Array(100).keys());

}
