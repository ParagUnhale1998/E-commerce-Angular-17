import { Component } from '@angular/core';
import { SearchComponent } from '../../components/all-products/search/search.component';
import { ProductsService } from '../../core/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { SortFilterComponent } from '../../components/all-products/sort-filter/sort-filter.component';
import { ProductsLayoutComponent } from '../../components/all-products/products-layout/products-layout.component';
import { ProductsListComponent } from '../../components/all-products/products-list/products-list.component';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [SearchComponent,SortFilterComponent,
    ProductsLayoutComponent,ProductsListComponent
  ],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent {
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
