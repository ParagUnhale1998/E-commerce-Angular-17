import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-size',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-size.component.html',
  styleUrl: './product-size.component.scss',
})
export class ProductSizeComponent {
  @Input() product: any;
  @Input() selectedSize!: string;
  @Output() selectedSizeChange = new EventEmitter<string>();
  @Input() selectedQuantity!: number;
  @Output() selectedQuantityChange = new EventEmitter<number>();

  constructor() { }

  handleSizeClick(size: string) {
    this.selectedSize = size;
    this.selectedSizeChange.emit(size); // Emitting selectedSizeChange event with new size
  }

  decreaseQuantity() {
    if (this.selectedQuantity > 1) {
      this.selectedQuantity--;
      this.selectedQuantityChange.emit(this.selectedQuantity); // Emitting selectedQuantityChange event with decreased quantity
    }
  }

  increaseQuantity() {
    this.selectedQuantity++;
    this.selectedQuantityChange.emit(this.selectedQuantity); // Emitting selectedQuantityChange event with increased quantity
  }

  setQuantity(event: any) {
    const value = event.target.value
    const parsedValue = parseInt(value, 10);
    this.selectedQuantity = isNaN(parsedValue) ? 1 : Math.max(1, parsedValue);
    this.selectedQuantityChange.emit(this.selectedQuantity); // Emitting selectedQuantityChange event with parsed quantity
  }
}