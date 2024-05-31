import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductsService } from '../../../core/services/products.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  @Input() searchInput = '';
  @Output() setProducts = new EventEmitter<any[]>();
  searchQuery = '';
  @Input() allProducts: any = [];

  private searchSubject = new Subject<string>();

  constructor(private productService: ProductsService,private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['search']) {
        this.searchQuery = params['search'];
      }
    });

    this.searchQuery = this.searchInput || '';
    // Setup debounced search
    this.searchSubject.pipe(
      debounceTime(300) // Adjust the debounce time as needed
    ).subscribe(query => {
      this.filterProductList(query);
    });
  }

  onSearchQueryChange(query: string) {
    this.searchSubject.next(query);
  }

  filterProductList(query?: string) {
    const lowerCaseQuery = (query ?? this.searchQuery).toLowerCase().trim();
    if (lowerCaseQuery === '') {
      // If the search query is blank, show all products
      this.setProducts.emit(this.allProducts);
    } else {
      // setTimeout(() => {
        const filteredProducts = this.allProducts.filter((product: any) =>
          JSON.stringify(product).toLowerCase().includes(lowerCaseQuery)
        );
        this.setProducts.emit(filteredProducts);
      // }, 1000);
      
    }
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.filterProductList();
    }
  }
}
