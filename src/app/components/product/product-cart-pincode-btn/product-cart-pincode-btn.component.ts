import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductSizeComponent } from '../product-size/product-size.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomToastrService } from '../../../core/services/custom-toastr.service';

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

  constructor(private fb: FormBuilder,private toastrService:CustomToastrService) {}

  ngOnInit(): void {
    this.selectedSize = this.product.options[1] && this.product.options[1].values ? this.product.options[1].values[0] : null;
    this.pincodeForm = this.fb.group({
      pincode: ['']
    });
  }

  addToCart() {
    const storedCartItems = localStorage.getItem('cartItems');

    let cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
    const isProductInCart = cartItems.some((item:any) => item.id === this.product.id);

    if (isProductInCart) {
      this.toastrService.showWarning('Product is already in the cart','Warning');
      return;
    }

    const totalValue = this.product.variants.nodes[0].price.amount;
    const productToAdd = { ...this.product, selectedSize: this.selectedSize, selectedQuantity: this.selectedQuantity, totalValue };
    cartItems.push(productToAdd);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    this.toastrService.showSuccess('Product added successfully','Successfull!');
  }

  addToWishlist() {
    const storedWishlistItems = localStorage.getItem('wishlistItems');
    let wishlistItems =storedWishlistItems ? JSON.parse(storedWishlistItems) : [];
    const isProductInWishlist = wishlistItems.some((item:any) => item.id === this.product.id);

    if (isProductInWishlist) {
      this.toastrService.showWarning('Product is already in the wishlist','Warning');
      return;
    }

    const totalValue = this.product.variants.nodes[0].price.amount;
    const productToAdd = { ...this.product, selectedSize: this.selectedSize, selectedQuantity: this.selectedQuantity, totalValue };
    wishlistItems.push(productToAdd);
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    this.toastrService.showSuccess('Product added successfully','Successfull!');
  }

  onSelectedSizeChange(size: string) {
    this.selectedSize = size;
  }

  onSelectedQuantityChange(quantity: number) {
    this.selectedQuantity = quantity;
  }
  
}