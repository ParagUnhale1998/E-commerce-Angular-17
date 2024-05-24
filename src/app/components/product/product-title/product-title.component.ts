import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-title',
  standalone: true,
  imports: [],
  templateUrl: './product-title.component.html',
  styleUrl: './product-title.component.scss',
})
export class ProductTitleComponent implements OnInit {
  @Input() product: any;

  originalPrice: any;
  ngOnInit(): void {
    this.originalPrice = parseFloat(
      this.product?.priceRange.minVariantPrice.amount
    );
  }
}
