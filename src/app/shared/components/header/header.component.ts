import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled = false;
  showSearchbar = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  toggleSearchbar() {
    this.showSearchbar = !this.showSearchbar;
  }

  openWishlist() {
    // Implement wishlist open logic
  }

  openCart() {
    // Implement cart open logic
  }
}
