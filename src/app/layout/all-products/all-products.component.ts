import {
  Component,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { SearchComponent } from '../../components/all-products/search/search.component';
import { ProductsService } from '../../core/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { SortFilterComponent } from '../../components/all-products/sort-filter/sort-filter.component';
import { ProductsLayoutComponent } from '../../components/all-products/products-layout/products-layout.component';
import { ProductsListComponent } from '../../components/all-products/products-list/products-list.component';
import { ProductsSignalService } from '../../core/services/products-signal.service';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [
    SearchComponent,
    SortFilterComponent,
    ProductsLayoutComponent,
    ProductsListComponent,
  ],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss',
})
export class AllProductsComponent {
  allProducts: Signal<any[]> = this.productService.products$;
  searchValue: WritableSignal<string> = signal('');
  filterProducts: WritableSignal<any[]> = signal([]);
  filterProductsOperations: Signal<any[]> = signal([]);
  gridLayoutClass: WritableSignal<string> = signal('grid-cols-2');

  constructor(
    private productService: ProductsSignalService,
    private route: ActivatedRoute
  ) {
    // Compute filtered products based on search value

    this.filterProduct();
    // Listen to route query parameters
    this.route.queryParams.subscribe((params) => {
      this.searchValue.set(params['search'] || '');
      this.filterProduct();
    });
  }

  filterProduct() {
    this.filterProductsOperations = computed(() => {
      const products = this.allProducts();
      const query = this.searchValue().toLowerCase().trim();
      if (query) {
        return products.filter((product) =>
          JSON.stringify(product)?.toLowerCase().includes(query)
        );
      } else {
        return products;
      }
    });

    this.filterProducts.set(this.filterProductsOperations());
  }

  receiveFilterProducts(value: any[]) {
    this.filterProducts.set(value);
  }
  receiveGridLayoutClass(value: string) {
    this.gridLayoutClass.set(value);
  }
}
/*
  allProducts: any[] = [];
  filterProducts: any[] = [];
  gridLayoutClass = 'grid-cols-2';
  searchValue = '';

  constructor(private productService: ProductsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.productService.products$.subscribe(products => {
      this.allProducts = products;
      this.filterProducts = products;
    });

    this.route.queryParams.subscribe(params => {
      this.searchValue = params['search'] || '';
      if (this.searchValue) {
        const lowerCaseQuery = this.searchValue?.toLowerCase().trim();
       const filterProducts = this.allProducts.filter((product) =>
        JSON.stringify(product)?.toLowerCase().includes(lowerCaseQuery)
      );
      this.filterProducts = filterProducts
      } else {
        this.filterProducts = this.allProducts
      }
    });
  }

  receiveFilterProducts(value: any[]) {
    this.filterProducts = value;
  }

  receiveGridLayoutClass(value: string) {
    this.gridLayoutClass = value;
  }
}
*/
