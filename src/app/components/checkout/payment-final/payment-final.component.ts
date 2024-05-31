import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../core/services/user.service';
import { CustomToastrService } from '../../../core/services/custom-toastr.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../../../environments/environment';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-payment-final',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './payment-final.component.html',
  styleUrl: './payment-final.component.scss'
})
export class PaymentFinalComponent {


  @Input() billingInfo: any;
  @Input() cartItems!: any[];
  @Input() totalPrice!: number;

  paymentMethod: string = 'cashOnDelivery';
  cartData: any[];
  carttotalPrice: number;
  formData!: FormGroup;

  private apiUrlUser = environment.userApiUrl;
  private apiUrlOrder = environment.ordersApiUrl;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private http: HttpClient,
    private toastrService: CustomToastrService,
    private spinner: NgxSpinnerService
  ) {
    this.cartData = [];
    this.carttotalPrice = 0;
  }

  ngOnInit(): void {
    this.cartData = this.cartItems;
    this.carttotalPrice = this.totalPrice;
    this.formData = this.fb.group({
      cardNumber: [''],
      expiryDate: [''],
      cvv: ['']
    });
  }

  handlePaymentMethodChange(event: any): void {
    this.paymentMethod = event.target.value;
  }

  async handleSubmit(): Promise<void> {
    this.spinner.show();
    const userData = JSON.parse(sessionStorage.getItem('loggedInUser')!);

    const orderData = this.constructOrderData(userData);

    try {
      const response = await this.http.post(`${this.apiUrlOrder}`, orderData).pipe(
        catchError(error => {
          this.handleOrderError(error);
          return throwError(error);
        })
      ).toPromise();

      await this.addUserMyOrders(response);
    } catch (error) {
      this.handleOrderError(error);
    } finally {
      this.spinner.hide();
    }
  }

  private constructOrderData(userData: any): any {
    return {
      userDetails: {
        id: userData.id,
        name: userData.name,
        email: userData.email
      },
      productsData: this.cartItems.map(item => ({
        id: item.id,
        Title: item.title,
        image: item.featuredImage.url,
        quantity: item.selectedQuantity,
        Size: item.selectedSize,
        totalPrice: item.totalValue
      })),
      paymentMethod: this.paymentMethod,
      totalItems: this.cartItems.length,
      totalPrice: this.totalPrice,
      status: 'pending',
      orderDate: new Date().toISOString(),
      AddressDetails: {
        fullName: this.billingInfo.fullName,
        area: this.billingInfo.area,
        houseNumber: this.billingInfo.houseNumber,
        pinCode: this.billingInfo.pinCode,
        city: this.billingInfo.city,
        email: this.billingInfo.email
      }
    };
  }

  private async addUserMyOrders(response: any): Promise<void> {
    const userData = JSON.parse(sessionStorage.getItem('loggedInUser')!);

    try {
      const orderId = response['id'];
      const updatedUser = {
        ...userData,
        myOrders: [...userData.myOrders, orderId]
      };

      await this.http.patch(`${this.apiUrlUser}/${userData.id}`, { myOrders: updatedUser.myOrders }).toPromise();
      console.log('Order placed successfully');
      this.toastrService.showSuccess('Order placed successfully', 'Success');
      this.router.navigate(['/profile']);
    } catch (error) {
      this.handleOrderError(error);
    }
  }

  private handleOrderError(error: any): void {
    console.error('Error placing order:', error);
    this.toastrService.showWarning('Error placing order', 'Warning');
    this.router.navigate(['/checkout']);
  }
}
  /*
  @Input() billingInfo: any;
  @Input() cartItems!: any[];
  @Input() totalPrice!: number;

  paymentMethod: string = 'cashOnDelivery';
  cartData: any[];
  carttotalPrice: number;
  formData!: FormGroup;

  private apiUrlUser = environment.userApiUrl;
  private apiUrlOrder = environment.ordersApiUrl;


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    // private toastr: ToastrService,
    private http: HttpClient,
    private toastrService:CustomToastrService,
    private spinner: NgxSpinnerService 
  ) {
    this.cartData = [];
    this.carttotalPrice = 0;
  }

  ngOnInit(): void {
    this.cartData = this.cartItems;
    this.carttotalPrice = this.totalPrice;
    this.formData = this.fb.group({
      cardNumber: [''],
      expiryDate: [''],
      cvv: ['']
    });
  }

  handlePaymentMethodChange(event: any): void {
    this.paymentMethod = event.target.value;
  }

  async handleSubmit(): Promise<void> {
    this.spinner.show();
    const userData = JSON.parse(sessionStorage.getItem('loggedInUser')!);

    const orderData = {
      userDetails: {
        id: userData.id,
        name: userData.name,
        email: userData.email
      },
      productsData: this.cartItems.map(item => ({
        id: item.id,
        Title: item.title,
        image: item.featuredImage.url,
        quantity: item.selectedQuantity,
        Size: item.selectedSize,
        totalPrice: item.totalValue
      })),
      paymentMethod: this.paymentMethod,
      totalItems: this.cartItems.length,
      totalPrice: this.totalPrice,
      status: 'pending',
      orderDate: new Date().toISOString(),
      AddressDetails: {
        fullName: this.billingInfo.fullName,
        area: this.billingInfo.area,
        houseNumber: this.billingInfo.houseNumber,
        pinCode: this.billingInfo.pinCode,
        city: this.billingInfo.city,
        email: this.billingInfo.email
      }
    };

    try {
      // const response = await this.http.post('http://localhost:3000/orders', orderData).toPromise();
      const response = await this.http.post(`${this.apiUrlOrder}`, orderData).toPromise();
      this.addUserMyOrders(response);
    } catch (error) {
      // this.toastr.warning('Error placing order');
      this.toastrService.showWarning('Error placing order','Warning');

    }finally {
      this.spinner.hide();  // Hide spinner
    }
  }

  async addUserMyOrders(response: any): Promise<void> {
    const userData = JSON.parse(sessionStorage.getItem('loggedInUser')!);

    try {
      const orderId = response['id'];
      const updatedUser = {
        ...userData,
        myOrders: [...userData.myOrders, orderId]
      };

      // await this.http.patch(`http://localhost:3000/users/${userData.id}`, { myOrders: updatedUser.myOrders }).toPromise();
      await this.http.patch(`${this.apiUrlUser}/${userData.id}`, { myOrders: updatedUser.myOrders }).toPromise();
      console.log('Order placed successfully');

      // this.toastr.success('Order placed successfully');
      this.toastrService.showSuccess('Order placed successfully','Success');

      this.router.navigate(['/profile']);
    } catch (error) {
      // this.toastr.warning('Error placing order');
      this.toastrService.showWarning('Error placing order','Warning');

      this.router.navigate(['/checkout']);
    }
  }
}*/