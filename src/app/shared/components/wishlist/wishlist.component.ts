import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistService } from '../../../core/services/wishlist.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomToastrService } from '../../../core/services/custom-toastr.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit, OnDestroy {
  wishlistItems: any[] = [];
  private destroy$ = new Subject<void>();

  constructor(
    private wishlistService: WishlistService,
    private router: Router,
    private toastrService: CustomToastrService
  ) {}

  ngOnInit(): void {
    this.preventBodyScroll(true);
    this.loadWishlistItems();
  }

  ngOnDestroy(): void {
    this.preventBodyScroll(false);
    this.destroy$.next();
    this.destroy$.complete();
  }

  private preventBodyScroll(disable: boolean): void {
    document.body.style.overflow = disable ? 'hidden' : 'scroll';
  }

  private loadWishlistItems(): void {
    const storedWishlistItems = localStorage.getItem('wishlistItems');
    if (storedWishlistItems) {
      this.wishlistItems = JSON.parse(storedWishlistItems);
    }
  }

  closeWishlist(): void {
    this.wishlistService.closeWishlist()
  }

  navigateToProductPage(product: any): void {
    const extractedId = this.extractProductId(product.id);
    this.closeWishlist();
    this.router.navigate(['/products', encodeURIComponent(extractedId)]);
  }

  private extractProductId(productId: string): string {
    return productId.substring(productId.lastIndexOf('/') + 1);
  }

  removeItemFromWishlist(event: Event, index: number): void {
    event.stopPropagation();
    this.wishlistItems.splice(index, 1);
    localStorage.setItem('wishlistItems', JSON.stringify(this.wishlistItems));
  }

  addToCart(product: any): void {
    const storedCartItems = localStorage.getItem('cartItems');
    let cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];

    if (this.isProductInCart(cartItems, product)) {
      this.toastrService.showWarning('Product is already in the cart', 'Warning');
      return;
    }

    cartItems.push({ ...product });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    this.toastrService.showSuccess('Product added successfully', 'Success');
  }

  private isProductInCart(cartItems: any[], product: any): boolean {
    return cartItems.some(item => item.id === product.id);
  }

  getProductColor(product: any): string {
    const colorOption = product.options?.find((option: any) => option.name === 'Color');
    return colorOption ? colorOption.values[0] : 'N/A';
  }
}

  /*wishlistItems: any[] =[]
  constructor(
    private wishlistService:WishlistService,
    private router: Router, // Router for navigation,
    private toastrService:CustomToastrService
  ) {}

  ngOnInit(): void {
    // Fetch wishlist items from localStorage or API
    document.body.style.overflow = 'hidden';
    const storedWishlistItems = localStorage.getItem('wishlistItems');
    if (storedWishlistItems) {
      this.wishlistItems = JSON.parse(storedWishlistItems);
    }

  }


  ngOnDestroy(): void {
    document.body.style.overflow = 'scroll';
  }


  closeWishlist(): void {
    this.wishlistService.wishlistOpen = false;

  }

  navigateToProductPage(product: any): void {
    const extractedId = product.id.substring(product.id.lastIndexOf('/') + 1);
    this.closeWishlist(); // Close wishlist when navigating to product page
    this.router.navigate(['/products', encodeURIComponent(extractedId)]);
  }

  removeItemFromWishlist(event: Event, index: number): void {
    event.stopPropagation();
    this.wishlistItems.splice(index, 1);
    localStorage.setItem('wishlistItems', JSON.stringify(this.wishlistItems));
  }

  addToCart(product: any): void {
    const storedCartItems = localStorage.getItem('cartItems');

    let cartItems: any[] = storedCartItems ? JSON.parse(storedCartItems) : [];
    const isProductInCart = cartItems.some(item => item.id === product.id);
    if (isProductInCart) {
      // Notify user that product is already in the cart
      // Implement your notification logic here
      this.toastrService.showWarning('Product is already in the cart','Warning');

      return;
    }
    const productToAdd = { ...product };
    cartItems.push(productToAdd);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    // Notify user that product was added to cart successfully
    // Implement your notification logic here
    this.toastrService.showSuccess('Product added successfully','Successfull!');

  }

  getProductColor(product: any): string {
    const colorOption = product.options?.find((option: any) => option.name === 'Color');
    return colorOption ? colorOption.values[0] : 'N/A';
  }
}*/