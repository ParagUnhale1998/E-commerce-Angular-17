import { Component, Input } from '@angular/core';
import { ProductsService } from '../../../core/services/products.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductSliderComponent } from '../product-slider/product-slider.component';

@Component({
  selector: 'app-filter-tabs',
  standalone: true,
  imports: [CommonModule,ProductSliderComponent],
  templateUrl: './filter-tabs.component.html',
  styleUrl: './filter-tabs.component.scss'
})
export class FilterTabsComponent {
  products: any[] = [];
  filterProduct: any[] = [];
  category: string = "Perfume"; // Initialize with default category
  @Input() categories!: string[]; // Array of categories from parent

  constructor(
    private productService: ProductsService, // Inject ProductService
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.products$.subscribe((products) => {
      this.products = products;
      this.filterProducts();

    });
  }

  filterProducts(): void {
    if (this.category) {
      const lowerCaseQuery = this.category.toLowerCase().trim();
      this.filterProduct = this.products.filter(product =>
        JSON.stringify(product).toLowerCase().includes(lowerCaseQuery)
      );
    }
  }

  handleTabClick(tabName: string): void {
    this.category = tabName;
    this.filterProducts();
  }

  navigateToProducts(): void {
    this.router.navigate(['/products']);
  }

}
