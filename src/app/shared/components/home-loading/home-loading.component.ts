import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-loading.component.html',
  styleUrl: './home-loading.component.scss',
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition('void <=> *', [animate(500)]),
    ]),
  ],
})
export class HomeLoadingComponent implements OnInit {
  
  categoryArray = new Array(12);
  skeletonArray = new Array(3);

 ngOnInit(): void {
   
 }
}
