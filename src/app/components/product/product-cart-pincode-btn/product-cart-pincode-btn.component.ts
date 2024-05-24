import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductSizeComponent } from '../product-size/product-size.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-cart-pincode-btn',
  standalone: true,
  imports: [CommonModule,ProductSizeComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './product-cart-pincode-btn.component.html',
  styleUrl: './product-cart-pincode-btn.component.scss'
})
export class ProductCartPincodeBtnComponent {
  @Input() product: any;
  selectedSize!: string;
  selectedQuantity: number = 1;
  pincodeForm!: FormGroup;

  constructor(private fb: FormBuilder,) {}

  ngOnInit(): void {
    this.selectedSize = this.product.options[1] && this.product.options[1].values ? this.product.options[1].values[0] : null;
    this.pincodeForm = this.fb.group({
      pincode: ['']
    });
  }

  addToCart() {
    // let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    // const isProductInCart = cartItems.some(item => item.id === this.product.id);

    // if (isProductInCart) {
    //   this.toastr.warning('Product is already in the cart');
    //   return;
    // }

    // const totalValue = this.product.variants.nodes[0].price.amount;
    // const productToAdd = { ...this.product, selectedSize: this.selectedSize, selectedQuantity: this.selectedQuantity, totalValue };
    // cartItems.push(productToAdd);
    // localStorage.setItem('cartItems', JSON.stringify(cartItems));
    // this.toastr.success('Product added successfully');
  }

  addToWishlist() {
    // let wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    // const isProductInWishlist = wishlistItems.some(item => item.id === this.product.id);

    // if (isProductInWishlist) {
    //   this.toastr.warning('Product is already in the wishlist');
    //   return;
    // }

    // const totalValue = this.product.variants.nodes[0].price.amount;
    // const productToAdd = { ...this.product, selectedSize: this.selectedSize, selectedQuantity: this.selectedQuantity, totalValue };
    // wishlistItems.push(productToAdd);
    // localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    // this.toastr.success('Product added successfully');
  }

  onSelectedSizeChange(size: string) {
    this.selectedSize = size;
    // Additional logic if needed
  }

  // Method to handle quantity change emitted from ProductSizeComponent
  onSelectedQuantityChange(quantity: number) {
    this.selectedQuantity = quantity;
    // Additional logic if needed
  }
  
}