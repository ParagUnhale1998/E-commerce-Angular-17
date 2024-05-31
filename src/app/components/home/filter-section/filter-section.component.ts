import { Component, computed, effect } from '@angular/core';
import { ProductsService } from '../../../core/services/products.service';
import { CommonModule } from '@angular/common';
import { ProductSliderComponent } from '../product-slider/product-slider.component';
import { RouterLink } from '@angular/router';
import { ProductsSignalService } from '../../../core/services/products-signal.service';

@Component({
  selector: 'app-filter-section',
  standalone: true,
  imports: [CommonModule, ProductSliderComponent, RouterLink],
  templateUrl: './filter-section.component.html',
  styleUrl: './filter-section.component.scss',
})
export class FilterSectionComponent {
  products = this.productService.products$;
  newArrivals = computed(() =>
    this.products().filter((product) => product.tags.includes('newArrival'))
  );
  trending = computed(() =>
    this.products().filter((product) => product.tags.includes('trending'))
  );
  activeTab: string = 'new';

  constructor(private productService: ProductsSignalService) {
    // Effect to handle changes in products signal
    effect(() => {
      const products = this.products();
      // console.log('Products updated:', products);
      // If you need to react to products update in other ways, do it here.
    });
  }

  handleTabClick(tabName: string) {
    this.activeTab = tabName;
  }
}



/*
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
*/
