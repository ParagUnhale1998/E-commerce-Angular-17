import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-image.component.html',
  styleUrl: './product-image.component.scss'
})
export class ProductImageComponent {
  @Input() product: any;
  mainImage!: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['product'] && this.product) {
      this.mainImage = this.product.featuredImage.url;
    }
  }

  setMainImage(url: string) {
    this.mainImage = url;
  }
}