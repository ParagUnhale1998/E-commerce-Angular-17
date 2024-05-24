import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as productsData from  '../../../assets/products.json'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productsSubject = new BehaviorSubject<any[]>([]);
  private cartOpenSubject = new BehaviorSubject<boolean>(false);
  private wishlistOpenSubject = new BehaviorSubject<boolean>(false);
  private filteredProductsSubject = new BehaviorSubject<any[]>([]);


  products$ = this.productsSubject.asObservable();
  cartOpen$ = this.cartOpenSubject.asObservable();
  wishlistOpen$ = this.wishlistOpenSubject.asObservable();
  filteredProducts$ = this.filteredProductsSubject.asObservable();

  constructor() {
    this.loadProducts();
  }

  private loadProducts() {
    this.productsSubject.next(productsData.products);
    this.filteredProductsSubject.next(productsData.products);
  }

  setProducts(products: any[]) {
    this.productsSubject.next(products);
  }

  setCartOpen(open: boolean) {
    this.cartOpenSubject.next(open);
  }

  setWishlistOpen(open: boolean) {
    this.wishlistOpenSubject.next(open);
  }

  setFilterProducts(filter: any) {
    this.filteredProductsSubject.next(filter);
  }
}