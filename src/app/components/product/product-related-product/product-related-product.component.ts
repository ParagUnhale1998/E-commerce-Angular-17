import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductSliderComponent } from '../../home/product-slider/product-slider.component';

@Component({
  selector: 'app-product-related-product',
  standalone: true,
  imports: [CommonModule,ProductSliderComponent],
  templateUrl: './product-related-product.component.html',
  styleUrl: './product-related-product.component.scss'
})
export class ProductRelatedProductComponent {
  @Input() relatedProducts: any[] = [];
  @Input() Heading: string = '';
}
