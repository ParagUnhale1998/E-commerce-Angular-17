import { Component, Input, OnInit } from '@angular/core';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-product-slider',
  standalone: true,
  imports: [ProductCardComponent,CommonModule,NgClass],
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.scss'
})
export class ProductSliderComponent implements OnInit{
  @Input() products!: any[];
  @Input() howManyProductShowCss: string=''
  constructor(){

  }
  ngOnInit(): void {
    console.log(this.howManyProductShowCss)
  }
}
