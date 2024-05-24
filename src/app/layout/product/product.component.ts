import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { ProductImageComponent } from '../../components/product/product-image/product-image.component';
import { ProductTitleComponent } from '../../components/product/product-title/product-title.component';
import { CommonModule } from '@angular/common';
import { ProductOfferComponent } from '../../components/product/product-offer/product-offer.component';
import { ProductCartPincodeBtnComponent } from '../../components/product/product-cart-pincode-btn/product-cart-pincode-btn.component';
import { ProductPayDescriptionComponent } from '../../components/product/product-pay-description/product-pay-description.component';
import { ProductPolicyReturnComponent } from '../../components/product/product-policy-return/product-policy-return.component';
import { ProductRelatedProductComponent } from '../../components/product/product-related-product/product-related-product.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    ProductImageComponent,
    ProductTitleComponent,
    ProductOfferComponent,
    ProductCartPincodeBtnComponent,
    ProductPayDescriptionComponent,
    ProductPolicyReturnComponent,
    ProductRelatedProductComponent,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  product: any;
  relatedProducts: any[] = [];
  products: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.loadProduct(id);
      }
    });
  }

  loadProduct(id: string) {
    this.productsService.products$.subscribe((products) => {
      this.products = products;
      const numericId = parseInt(id);
      this.product = products.find(
        (item: any) =>
          parseInt(item.id.substring(item.id.lastIndexOf('/') + 1)) ===
          numericId
      );

      if (this.product) {
        const titleWords = this.product.title.split(' ');
        const lastWord = titleWords[titleWords.length - 1].toLowerCase();
        this.relatedProducts = products.filter((product: any) =>
          product.title.toLowerCase().includes(lastWord)
        );
      }
    });
  }
}
