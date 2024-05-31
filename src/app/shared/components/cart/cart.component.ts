import { Component, OnDestroy, OnInit, Signal, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../../core/services/cart.service';
import { AuthService } from '../../../core/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: any[] = [];
  cartTotalPrice = signal(0);

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';

    const storedCartItems = localStorage.getItem('cartItems');
    this.cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
    this.updateTotalPrice();
  }

  ngOnDestroy(): void {
    document.body.style.overflow = 'scroll';
  }

  updateTotalPrice(): void {
    const totalPrice = this.cartItems.reduce((total, item) => {
      const pricePerUnit = parseFloat(item.variants.nodes[0].price.amount);
      return total + (pricePerUnit * item.selectedQuantity || 0);
    }, 0);

    this.cartTotalPrice.set(totalPrice);
  }

  closeCart(): void {
    this.cartService.closeCart();
  }

  handleQuantityChange(
    event: Event,
    index: number,
    newQuantity: number,
    product: any
  ): void {
    event.stopPropagation();

    const updatedCartItems = [...this.cartItems];
    updatedCartItems[index].selectedQuantity = newQuantity;
    updatedCartItems[index].totalValue = parseFloat(product.variants.nodes[0].price.amount) * newQuantity;

    this.cartItems = updatedCartItems;
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.updateTotalPrice();
  }

  navigateToProductPage(product: any): void {
    const extractedId = product.id.substring(product.id.lastIndexOf('/') + 1);
    this.closeCart();
    this.router.navigate(['/products', extractedId]);
  }

  navigateToCheckout(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/checkout']);
    } else {
      this.router.navigate(['/login']);
    }
    this.closeCart();
  }

  removeItemFromCart(event: Event, index: number): void {
    event.stopPropagation();
    const updatedCartItems = [...this.cartItems];
    updatedCartItems.splice(index, 1);
    this.cartItems = updatedCartItems;
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.updateTotalPrice();
  }

  getProductColor(product: any): string {
    const colorOption = product.options?.find(
      (option: any) => option.name === 'Color'
    );
    return colorOption ? colorOption.values[0] : 'N/A';
  }
}

/*
export class CartComponent implements OnInit, OnDestroy {
  cartItems: any[] = [];
  // cartTotalPrice: number = 0;
  cartTotalPrice = signal(0)

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
    const storedCartItems = localStorage.getItem('cartItems');
    this.cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
    this.updateTotalPrice();
  }

  ngOnDestroy(): void {
    document.body.style.overflow = 'scroll';
  }

  updateTotalPrice(): void {
    let totalPrice = 0;
    this.cartItems.forEach((item) => {
      const pricePerUnit = parseFloat(item.variants.nodes[0].price.amount);
      const totalValue = pricePerUnit * item.selectedQuantity;
      totalPrice += totalValue || 0;
    });
    // this.cartTotalPrice = totalPrice
    this.cartTotalPrice.set(totalPrice)
  }

  closeCart(): void {
    this.cartService.closeCart()
  }

  handleQuantityChange(
    event: Event,
    index: number,
    newQuantity: number,
    product: any
  ): void {
    event.stopPropagation(); // Stop event propagation

    const updatedCartItems = [...this.cartItems];
    updatedCartItems[index].selectedQuantity = newQuantity;
    const pricePerUnit = parseFloat(product.variants.nodes[0].price.amount);
    const totalValue = pricePerUnit * newQuantity;
    updatedCartItems[index].totalValue = totalValue;
    this.cartItems = updatedCartItems;
    // this.cartService.cartItems = updatedCartItems;
    this.updateTotalPrice();
  }

  navigateToProductPage(product: any): void {
    const extractedId = product.id.substring(product.id.lastIndexOf('/') + 1);
    this.closeCart();
    this.router.navigate(['/products', extractedId]);
  }

  navigateToCheckout(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/checkout']);
    } else {
      this.router.navigate(['/login']);
    }
    this.closeCart();
  }

  removeItemFromCart(event: Event, index: number): void {
    event.stopPropagation();
    const updatedCartItems = [...this.cartItems];
    updatedCartItems.splice(index, 1);
    // this.cartService.cartItems = updatedCartItems;
    this.cartItems = updatedCartItems;
    this.updateTotalPrice();
  }

  getProductColor(product: any): string {
    const colorOption = product.options?.find(
      (option: any) => option.name === 'Color'
    );
    return colorOption ? colorOption.values[0] : 'N/A';
  }
}
*/