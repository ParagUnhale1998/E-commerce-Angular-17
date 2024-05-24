import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sort-filter.component.html',
  styleUrl: './sort-filter.component.scss'
})
export class SortFilterComponent implements OnInit {

  @Input() products: any[] = [];
  @Output() setProducts = new EventEmitter<any[]>();

  selectedSort = 'Sort';
  isVisibleFilter = false;
  isRefineFilter = false;
  isScrolled = false;
  allProducts:any = []
  categoryImages = [
    { name: 'All', image: 'snitch-store009.jpg' },
    { name: 'Shirt', image: 'snitch-store009.jpg' },
    { name: 'T-Shirt', image: 'snitch-store010.jpg' },
    { name: 'Jeans', image: 'snitch-store011.jpg' },
    { name: 'Pants', image: 'snitch-store012.jpg' },
    { name: 'Shorts', image: 'snitch-store013.jpg' },
    { name: 'Coords', image: 'snitch-store014.jpg' },
    { name: 'Jacket', image: 'snitch-store015.jpg' },
    { name: 'Inner', image: 'snitch-store016.jpg' },
    { name: 'Shoes', image: 'snitch-store017.webp' },
    { name: 'Perfume', image: 'snitch-store018.jpg' },
    { name: 'Sunglasses', image: 'snitch-store019.jpg' },
    { name: 'Accessories', image: 'snitch-store020.webp' }
  ];

  constructor() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
ngOnInit(): void {
  this.allProducts = this.products
}
  handleScroll() {
    const scrollPosition = window.scrollY;
    this.isScrolled = scrollPosition > 100;
  }

  handleSortChange(sortType: string) {
    this.isVisibleFilter = false;
    let sortedProducts: any[] = [];

    switch (sortType) {
      case 'lowtohigh':
        this.selectedSort = 'Price (Low to High)';
        sortedProducts = [...this.products].sort((a, b) => a.variants.nodes[0].price.amount - b.variants.nodes[0].price.amount);
        break;
      case 'hightolow':
        this.selectedSort = 'Price (High to Low)';
        sortedProducts = [...this.products].sort((a, b) => b.variants.nodes[0].price.amount - a.variants.nodes[0].price.amount);
        break;
      case 'newArrival':
        this.selectedSort = 'Newly Added';
        sortedProducts = this.products.filter(product => product.tags.includes('newArrival'));
        break;
      case 'trendings':
        this.selectedSort = 'Relevance';
        sortedProducts = this.products.filter(product => product.tags.includes('trending'));
        break;
      case 'bestSeller':
        this.selectedSort = 'Best Seller';
        sortedProducts = this.products.filter(product => product.tags.includes('bestsellers'));
        break;
      case 'latest':
        this.selectedSort = 'Latest';
        sortedProducts = [...this.products].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        break;
      case 'all':
        this.selectedSort = 'All';
        sortedProducts = this.products;
        break;
      default:
        sortedProducts = this.products;
    }

    this.setProducts.emit(sortedProducts);
  }

  handleCategoryFilter(category: string) {
    const lowerCaseQuery = category.toLowerCase().trim();
    if(lowerCaseQuery === 'all'){
      this.isRefineFilter = false;
      this.setProducts.emit(this.allProducts);
    }else{
      const filteredProducts = this.products.filter(product => JSON.stringify(product).toLowerCase().includes(lowerCaseQuery));
      this.isRefineFilter = false;
      this.setProducts.emit(filteredProducts);
    }
   
  }
}
