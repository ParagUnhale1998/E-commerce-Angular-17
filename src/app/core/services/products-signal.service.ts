import { Injectable, WritableSignal, effect, signal } from '@angular/core';
import * as productsData from '../../../assets/products.json';

@Injectable({
  providedIn: 'root',
})
export class ProductsSignalService {
  private productsSignal: WritableSignal<any[]> = signal(productsData.products);
  private cartOpenSignal: WritableSignal<boolean> = signal(false);
  private wishlistOpenSignal: WritableSignal<boolean> = signal(false);
  private filteredProductsSignal: WritableSignal<any[]> = signal(
    productsData.products
  );

  constructor() {}

  // Getter and Setter for products
  get products$() {
    return this.productsSignal.asReadonly();
  }

  getProducts() {
    return this.productsSignal();
  }

  setProducts(products: any[]) {
    this.productsSignal.set(products);
  }

  // Getter and Setter for cartOpen
  get cartOpen$() {
    return this.cartOpenSignal.asReadonly();
  }

  getCartOpen() {
    return this.cartOpenSignal();
  }

  setCartOpen(open: boolean) {
    this.cartOpenSignal.set(open);
  }

  // Getter and Setter for wishlistOpen
  get wishlistOpen$() {
    return this.wishlistOpenSignal.asReadonly();
  }

  getWishlistOpen() {
    return this.wishlistOpenSignal();
  }

  setWishlistOpen(open: boolean) {
    this.wishlistOpenSignal.set(open);
  }

  // Getter and Setter for filteredProducts
  get filteredProducts$() {
    return this.filteredProductsSignal.asReadonly();
  }

  getFilteredProducts() {
    return this.filteredProductsSignal();
  }

  setFilterProducts(filter: any[]) {
    this.filteredProductsSignal.set(filter);
  }
}

/*  
products = this.productsService.products$;
  cartOpen = this.productsService.cartOpen$;
  wishlistOpen = this.productsService.wishlistOpen$;

  toggleCart() {
    this.productsService.setCartOpen(!this.cartOpen());
  }

  toggleWishlist() {
    this.productsService.setWishlistOpen(!this.wishlistOpen());
  }
  
  */

/*
    private productsSignal: WritableSignal<any[]> = signal(productsData.products);
    private cartOpenSignal: WritableSignal<boolean> = signal(false);
    private wishlistOpenSignal: WritableSignal<boolean> = signal(false);
    private filteredProductsSignal: WritableSignal<any[]> = signal(productsData.products);
  
    // Expose signals as readonly to outside
    products$ = this.productsSignal.asReadonly();
    cartOpen$ = this.cartOpenSignal.asReadonly();
    wishlistOpen$ = this.wishlistOpenSignal.asReadonly();
    filteredProducts$ = this.filteredProductsSignal.asReadonly();
  
    constructor() {}
    
    setProducts(products: any[]) {
      this.productsSignal.set(products);
    }
  
    setCartOpen(open: boolean) {
      this.cartOpenSignal.set(open);
    }
  
    setWishlistOpen(open: boolean) {
      this.wishlistOpenSignal.set(open);
    }
  
    setFilterProducts(filter: any[]) {
      this.filteredProductsSignal.set(filter);
    }
  
    // Effects can be added if you need to react to changes
    private loggingEffect = effect(() => {
      console.log(`Products: ${this.productsSignal()}`);
      console.log(`Filtered Products: ${this.filteredProductsSignal()}`);
      console.log(`Cart Open: ${this.cartOpenSignal()}`);
      console.log(`Wishlist Open: ${this.wishlistOpenSignal()}`);
    });
  }
*/
