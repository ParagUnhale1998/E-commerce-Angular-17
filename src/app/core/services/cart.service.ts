import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartOpenSubject = new BehaviorSubject<boolean>(false);
  cartOpen$ = this.cartOpenSubject.asObservable();
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  get cartOpen(): boolean {
    return this.cartOpenSubject.value;
  }

  toggleCart(): void {
    this.cartOpenSubject.next(!this.cartOpen);
  }
  closeCart(): void {
    this.cartOpenSubject.next(false);
  }
  openCart(): void {
    this.cartOpenSubject.next(true);
  }
  get cartItems(): any[] {
    return this.cartItemsSubject.value;
  }

  set cartItems(items: any[]) {
    this.cartItemsSubject.next(items);
  }

  updateCartItems(items: any[]): void {
    this.cartItemsSubject.next(items);
  }
}
/*
  private _cartItems!: any[];
  private _cartOpen = false;

  constructor() {
    const storedCartItems = localStorage.getItem('cartItems');
    this._cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
  }

  get cartOpen() {
    return this._cartOpen;
  }

  set cartOpen(value: boolean) {
    this._cartOpen = value;
  }

  get cartItems() {
    return this._cartItems;
  }

  set cartItems(items: any[]) {
    this._cartItems = items;
    localStorage.setItem('cartItems', JSON.stringify(items));
  }

}

 

*/
