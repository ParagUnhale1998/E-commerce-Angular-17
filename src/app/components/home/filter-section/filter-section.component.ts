import { Component } from '@angular/core';
import { ProductsService } from '../../../core/services/products.service';
import { CommonModule } from '@angular/common';
import { ProductSliderComponent } from '../product-slider/product-slider.component';

@Component({
  selector: 'app-filter-section',
  standalone: true,
  imports: [CommonModule,ProductSliderComponent],
  templateUrl: './filter-section.component.html',
  styleUrl: './filter-section.component.scss'
})
export class FilterSectionComponent {
  products: any[] = [];
  newArrivals: any[] = [];
  trending: any[] = [];
  activeTab: string = 'new';

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService.products$.subscribe((products) => {
      this.products = products;
      this.newArrivals = products.filter(product => product.tags.includes('newArrival'));
      this.trending = products.filter(product => product.tags.includes('trending'));
    });
  }

  handleTabClick(tabName: string) {
    this.activeTab = tabName;
  }
}