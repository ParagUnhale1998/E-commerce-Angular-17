import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-model',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './search-model.component.html',
  styleUrl: './search-model.component.scss'
})
export class SearchModelComponent {
  @Output() hideSearchBar = new EventEmitter<void>();
  @Input() showSearchbar :boolean =  false
  searchQuery = '';
  @ViewChild('inputRef', { static: true }) inputRef!: ElementRef<HTMLInputElement>;

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.inputRef.nativeElement.focus();
    }, 0);
  }

  handleSearchInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchQuery = target.value;
  }

  // handleKeyPress(event: KeyboardEvent): void {
  //   if (event.key === 'Enter') {
  //     this.navigateToProductPage();
  //   }
  // }

  filterProductList(): void {
    this.navigateToProductPage();
  }

  navigateToProductPage(): void {
    this.hideSearchBar.emit();
    this.router.navigate(['/products'], { queryParams: { search: this.searchQuery } });
  }
}