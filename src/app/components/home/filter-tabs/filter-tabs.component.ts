import { Component, Input, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { ProductsService } from '../../../core/services/products.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductSliderComponent } from '../product-slider/product-slider.component';
import { ProductsSignalService } from '../../../core/services/products-signal.service';

@Component({
  selector: 'app-filter-tabs',
  standalone: true,
  imports: [CommonModule,ProductSliderComponent],
  templateUrl: './filter-tabs.component.html',
  styleUrl: './filter-tabs.component.scss'
})
export class FilterTabsComponent {
  products = this.productService.products$;
  filterProduct: Signal<any[]> = signal([]);
  
  category: WritableSignal<string> = signal("Perfume");
  @Input() categories!: string[];

  constructor(
    private productService: ProductsSignalService,
    private router: Router
  ) {
    this.filterProduct = computed(() => {
      const products = this.products();
      const category = this.category().toLowerCase().trim();
      if (category) {
        return products.filter(product => JSON.stringify(product).toLowerCase().includes(category));
      } else {
        return products; // Return all products if no category is specified
      }
    });
  }

  handleTabClick(tabName: string): void {
    this.category.set(tabName);
  }

  navigateToProducts(): void {
    this.router.navigate(['/products']);
  }

}
  /*products = this.productService.products$;
  filterProduct: WritableSignal<any[]> = signal([]);
  
  category: WritableSignal<string> = signal("Perfume");
  @Input() categories!: string[];

  constructor(
    private productService: ProductsSignalService,
    private router: Router
  ) {
   
      effect(() => {
        this.filterProducts();
      }, {
        allowSignalWrites: true  // Enable signal writes within this effect
      });
    
  }

  ngOnInit(): void {
      // this.filterProducts();
  }

  filterProducts(): void {
    const products = this.products();
    const category = this.category().toLowerCase().trim();
    if (category) {
      this.filterProduct.set(
        products.filter(product => JSON.stringify(product).toLowerCase().includes(category))
      );
    }
    console.log('product',products)
    console.log('product',this.filterProduct())
  }

  handleTabClick(tabName: string): void {
    this.category.set(tabName);
  }

  navigateToProducts(): void {
    this.router.navigate(['/products']);
  }
  
}*/
  /*
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
*/