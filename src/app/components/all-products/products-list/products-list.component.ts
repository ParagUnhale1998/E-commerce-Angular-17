import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule,ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {

  @Input() products: any[] = [];
  @Input() gridClass: string = '';

  visibleProducts: number = 12;

  constructor() { }

  ngOnInit(): void { }

  handleShowMore(): void {
    this.visibleProducts += 12;
  }
}
