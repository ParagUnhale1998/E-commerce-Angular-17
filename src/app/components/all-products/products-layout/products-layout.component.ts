import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-products-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-layout.component.html',
  styleUrl: './products-layout.component.scss'
})
export class ProductsLayoutComponent {
  @Input() filterProductsLength: number = 0;
  @Output() setGridLayoutCss = new EventEmitter<string>();

  gridLayout: string = 'two-product';

  ngOnInit(): void {
    this.handleResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.handleResize();
  }

  handleResize(): void {
    if (window.innerWidth >= 768) {
      this.gridLayout = 'four-product';
    } else if (window.innerWidth <= 400) {
      this.gridLayout = 'one-product';
    } else {
      this.gridLayout = 'two-product';
    }
    this.updateGridLayout();
  }

  setGridLayout(layout: string): void {
    this.gridLayout = layout;
    this.updateGridLayout();
  }

  updateGridLayout(): void {
    let gridClass: string;
    switch (this.gridLayout) {
      case 'one-product':
        gridClass = 'grid-cols-1';
        break;
      case 'two-product':
        gridClass = 'grid-cols-2';
        break;
      case 'four-product':
        gridClass = 'grid-cols-4';
        break;
      default:
        gridClass = 'grid-cols-2';
    }
    this.setGridLayoutCss.emit(gridClass);
  }
}
