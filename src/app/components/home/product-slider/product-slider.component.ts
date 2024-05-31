import { Component, Input, OnInit } from '@angular/core';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { CommonModule, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-product-slider',
  standalone: true,
  imports: [ProductCardComponent,CommonModule,NgClass,RouterLink],
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', [
        animate(500)
      ]),
    ])
  ]
})
export class ProductSliderComponent implements OnInit{
  @Input() products!: any[];
  @Input() howManyProductShowCss: string=''
  constructor(){

  }
  ngOnInit(): void {
    // console.log(this.howManyProductShowCss)
  }
}
