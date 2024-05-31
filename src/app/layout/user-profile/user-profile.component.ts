import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { WishlistService } from '../../core/services/wishlist.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  GoogleLoginProvider,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { AuthService } from '../../core/services/auth.service';
import { CustomToastrService } from '../../core/services/custom-toastr.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../../environments/environment';
import { retry, map, switchMap, of, catchError, throwError } from 'rxjs';
declare var google: any;

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.GOOGLE_CLIENT_ID),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
})
export class UserProfileComponent {
    userData: any;
    myOrders: any[] = [];
  
    private apiUrlUser = environment.userApiUrl;
    private apiUrlOrder = environment.ordersApiUrl;
  
    constructor(
      private cartService: CartService,
      private wishlistService: WishlistService,
      private router: Router,
      private http: HttpClient,
      private authService: AuthService,
      private toastrService: CustomToastrService,
      private spinner: NgxSpinnerService
    ) {}
  
    ngOnInit(): void {
      const userDataString = sessionStorage.getItem('loggedInUser');
      if (userDataString) {
        this.userData = JSON.parse(userDataString);
        this.spinner.show();
        this.fetchMyOrders(this.userData.id).subscribe({
          next: (orders) => {
            this.myOrders = orders;
            this.spinner.hide();
          },
          error: (error) => {
            console.error('Error fetching user orders:', error);
            this.spinner.hide();
            this.toastrService.showInfo('Some Problem fetching user orders', 'Try again');
          }
        });
      } else {
        // Uncomment the following line if you want to redirect the user to login if not authenticated
        // this.router.navigate(['/login']);
      }
    }
  
    setCartOpen(): void {
      this.cartService.openCart();
    }
  
    setWishlistOpen(): void {
      this.wishlistService.openWishlist();
    }
  
    navigateToDetails(product: any): void {
      const productID = product.id.substring(product.id.lastIndexOf('/') + 1);
      this.router.navigate(['/products', productID]);
    }
  
    fetchMyOrders(userId: string) {
      return this.http.get<any>(`${this.apiUrlUser}/${userId}`).pipe(
        retry(3),
        map(response => response.myOrders || []),
        switchMap(orderIds => {
          if (orderIds.length > 0) {
            return this.fetchAllOrderDetails(orderIds);
          } else {
            return of([]);
          }
        }),
        catchError(error => {
          this.toastrService.showInfo('Some Problem fetching user orders', 'Try again');
          return throwError(error);
        })
      );
    }
  
    fetchAllOrderDetails(orderIds: string[]) {
      return of(orderIds).pipe(
        switchMap(ids => Promise.all(ids.map(id => this.fetchOrderDetails(id)))),
        map(orderDetails => orderDetails.filter(order => order !== null))
      );
    }
  
    fetchOrderDetails(orderId: string) {
      return this.http.get<any>(`${this.apiUrlOrder}/${orderId}`).pipe(
        retry(3),
        catchError(error => {
          this.toastrService.showInfo('Some Problem fetching order details', 'Try again');
          console.error('Error fetching order details:', error);
          return of(null);
        })
      ).toPromise();
    }
  
    logout(): void {
      this.toastrService.showSuccess('You have been logged out successfully', 'Success');
      google.accounts.id.disableAutoSelect(); // To clear the auto-login session
      this.authService.logout();
      this.router.navigate(['/login']);
    }
  }

  /*
  userData: any;
  myOrders: any[] = [];
  
  private apiUrlUser = environment.userApiUrl;
  private apiUrlOrder = environment.ordersApiUrl;

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService,
    private toastrService: CustomToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    const userDataString = sessionStorage.getItem('loggedInUser');
    if (userDataString) {
      this.userData = JSON.parse(userDataString);
      this.spinner.show();
      this.fetchMyOrders(this.userData.id); // Fetch orders after getting user data
    } else {
      // this.router.navigate(['/login']);
    }
  }

  setCartOpen() {
    this.cartService.openCart()
  }

  setWishlistOpen() {
    this.wishlistService.openWishlist()
  }

  navigateToDetails(product: any) {
    const productID = product.id.substring(product.id.lastIndexOf('/') + 1);
    this.router.navigate(['/products', productID]);
  }

  async fetchMyOrders(userId: string) {
    try {
      // const response: any = await this.http.get(`http://localhost:3000/users/${userId}`).toPromise();
      const response: any = await this.http
        .get(`${this.apiUrlUser}/${userId}`)
        .toPromise();
      const user = response;
      this.userData = user;

      if (user.myOrders && user.myOrders.length > 0) {
        const ordersData = await Promise.all(
          user.myOrders.map((order: string) => this.fetchOrderDetails(order))
        );
        this.myOrders = ordersData;
      } else {
        this.myOrders = [];
      }
      this.spinner.hide();
    } catch (error) {
      console.error('Error fetching user orders:', error);
      this.spinner.hide();
      this.toastrService.showInfo(
        'Some Problem fetching user orders',
        'Try again'
      );
    }
  }

  async fetchOrderDetails(orderId: string) {
    try {
      // const response: any = await this.http.get(`http://localhost:3000/orders/${orderId}`).toPromise();
      const response: any = await this.http
        .get(`${this.apiUrlOrder}/${orderId}`)
        .toPromise();
      return response;
    } catch (error) {
      this.toastrService.showInfo(
        'Some Problem fetching user orders',
        'Try again'
      );
      console.error('Error fetching order details:', error);
      return null;
    }
  }

  logout() {
    this.toastrService.showSuccess(
      'You have been logged out successfully',
      'Success'
    );
    google.accounts.id.disableAutoSelect(); // To clear the auto-login session
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
*/








/*
  ngOnInit(): void {
    const userDataString = sessionStorage.getItem("loggedInUser");
    if (userDataString) {
      this.userData = JSON.parse(userDataString);
    } else {
      this.router.navigate(['/login']);
    }

  }

  setCartOpen(open: boolean) {
    this.cartService.cartOpen = !this.cartService.cartOpen
  }

  setWishlistOpen(open: boolean) {
    this.wishlistService.wishlistOpen = ! this.wishlistService.wishlistOpen
  }

  navigateToDetails(product: any) {
    this.router.navigate(['/product', product.id]);
  }

}
*/
