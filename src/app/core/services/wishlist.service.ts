import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private wishlistOpenSubject = new BehaviorSubject<boolean>(false);
  wishlistOpen$ = this.wishlistOpenSubject.asObservable();

  get wishlistOpen(): boolean {
    return this.wishlistOpenSubject.value;
  }

  toggleWishlist(): void {
    this.wishlistOpenSubject.next(!this.wishlistOpen);
  }

  closeWishlist():void{
    this.wishlistOpenSubject.next(false);
  }
  openWishlist(): void {
    this.wishlistOpenSubject.next(true);
  }
}

  /*
  private _wishlistItems: any[] = [];
  private _wishlistOpen = false;

  constructor() {
    const storedWishlistItems = localStorage.getItem('wishlistItems');
    this._wishlistItems = storedWishlistItems ? JSON.parse(storedWishlistItems) : [];
  }

  get wishlistOpen(): boolean {
    return this._wishlistOpen;
  }

  set wishlistOpen(value: boolean) {
    this._wishlistOpen = value;
  }

  get wishlistItems(): any[] {
    return this._wishlistItems;
  }

  set wishlistItems(items: any[]) {
    this._wishlistItems = items;
    localStorage.setItem('wishlistItems', JSON.stringify(items));
  }

  addToWishlist(item: any): void {
    this._wishlistItems.push(item);
    this.updateLocalStorage();
  }

  removeFromWishlist(index: number): void {
    if (index >= 0 && index < this._wishlistItems.length) {
      this._wishlistItems.splice(index, 1);
      this.updateLocalStorage();
    }
  }

  clearWishlist(): void {
    this._wishlistItems = [];
    this.updateLocalStorage();
  }

  private updateLocalStorage(): void {
    localStorage.setItem('wishlistItems', JSON.stringify(this._wishlistItems));
  }
}*/