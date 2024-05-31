import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule,RouterLink,NgClass],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product: any;
  @Input() productCss!: string;
  @Input() showProductCss!: string;
  sizes: string[] = [];

  ngOnInit() {
    this.extractSizes();
    // console.log(this.productCss,this.showProductCss)
  }

  get extractedId(): string {
    return this.product.id.substring(this.product.id.lastIndexOf('/') + 1);
  }

  extractSizes() {
    const sizeOption = this.product.options.find((option:any) => option.name === 'Size');
    if (sizeOption) {
      this.sizes = sizeOption.values;
    }
  }
}