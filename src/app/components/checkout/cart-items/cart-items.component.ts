import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.scss'
})
export class CartItemsComponent {
  @Output() nextProcess = new EventEmitter<void>();
  @Output() setCartData = new EventEmitter<any>();
  @Output() setTotalPrice = new EventEmitter<number>();

  cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
  cartTotalPrice!: number;

  ngOnInit() {
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    let totalPrice = 0;
    this.cartItems.forEach((item: any) => {
      const pricePerUnit = parseFloat(item.variants.nodes[0].price.amount);
      const totalValue = pricePerUnit * item.selectedQuantity;
      totalPrice += totalValue || 0;
    });
    this.cartTotalPrice = totalPrice;
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.setCartData.emit(this.cartItems);
    this.setTotalPrice.emit(this.cartTotalPrice);
  }

  handleQuantityChange(index: number, newQuantity: number, product: any) {
    this.cartItems[index].selectedQuantity = newQuantity;
    const pricePerUnit = parseFloat(product.variants.nodes[0].price.amount);
    const totalValue = pricePerUnit * newQuantity;
    this.cartItems[index].totalValue = totalValue;
    this.calculateTotalPrice();
  }

  removeItemFromCart(index: number) {
    this.cartItems.splice(index, 1);
    this.calculateTotalPrice();
  }
  getProductColor(product: any): string {
    const colorOption = product.options?.find(
      (option: any) => option.name === 'Color'
    );
    return colorOption ? colorOption.values[0] : 'N/A';
  }

  hasSelectedSize(product: any): boolean {
    return product.selectedSize !== null;
  }

  getAvailableOptions(product: any): any[] {
    return product.options || [];
  }
}