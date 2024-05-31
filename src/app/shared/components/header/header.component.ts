import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SearchModelComponent } from '../search-model/search-model.component';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../../../core/services/cart.service';
import { WishlistComponent } from '../wishlist/wishlist.component';
import { WishlistService } from '../../../core/services/wishlist.service';
import { AuthService } from '../../../core/services/auth.service';
import { Subject, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    SearchModelComponent,
    CartComponent,
    WishlistComponent,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})

export class HeaderComponent implements OnInit, OnDestroy {
  isScrolled = false;
  showSearchbar = false;
  isAuthenticated!: boolean;
  private destroy$ = new Subject<void>();

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.authState();

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => this.hideSearchBar());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 0;
  }

  toggleSearchbar(): void {
    this.showSearchbar = !this.showSearchbar;
  }

  hideSearchBar(): void {
    this.showSearchbar = false;
  }

  toggleCart(): void {
    this.cartService.toggleCart();
  }

  get cartOpen(): boolean {
    return this.cartService.cartOpen;
  }

  toggleWishlist(): void {
    this.wishlistService.toggleWishlist();
  }

  get wishlistOpen(): boolean {
    return this.wishlistService.wishlistOpen;
  }

  navigateBasedOnAuth(): void {
    const isLoggedIn = sessionStorage.getItem('loggedInUser') || this.isAuthenticated;
    this.router.navigate([isLoggedIn ? '/profile' : '/login']);
  }
}

/*
export class HeaderComponent {
  isScrolled = false;
  showSearchbar = false;
  isAuthenticated!: boolean;

  constructor(private cartService: CartService,
    private wishlistService:WishlistService,
    private authService:AuthService,
    private router:Router
  ) {}


  ngOnInit(): void {
   
      this.isAuthenticated = this.authService.authState()
  
// console.log(this.isAuthenticated)
      // Subscribe to route changes
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.hideSearchBar();
    });


    }

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

  toggleSearchBar(): void {
    this.showSearchbar = !this.showSearchbar;
  }

  hideSearchBar(): void {
    this.showSearchbar = false;
  }

  toggleCart(): void {
    this.cartService.cartOpen = !this.cartService.cartOpen;
  }

  get cartOpen(): boolean {
    return this.cartService.cartOpen;
  }
  
  toggleWishlist(): void {
    this.wishlistService.wishlistOpen = !this.wishlistService.wishlistOpen;
  }

  get wishlistOpen(): boolean {
    return this.wishlistService.wishlistOpen;
  }

  navigateBasedOnAuth(): void {
    if (sessionStorage.getItem('loggedInUser') || this.isAuthenticated) {
      this.router.navigate(['/profile']);
    } else {
      this.router.navigate(['/login']);
    }
  }
  

}
*/