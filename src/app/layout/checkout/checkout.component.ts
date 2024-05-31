import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { CartService } from '../../core/services/cart.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartItemsComponent } from '../../components/checkout/cart-items/cart-items.component';
import { UserDetailsFormComponent } from '../../components/checkout/user-details-form/user-details-form.component';
import { PaymentFinalComponent } from '../../components/checkout/payment-final/payment-final.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,FormsModule,CartItemsComponent,UserDetailsFormComponent,PaymentFinalComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  isAuthenticated = false;
  activeStep = 1;
  userDetails: any = {};
  userCartItems: any = {};
  totalPrice!: number;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    // this.isAuthenticated = this.authService.isAuthenticated();
    // if (!this.isAuthenticated) {
    //   this.router.navigate(['/login']);
    // }
  }

  handleNext() {
    this.activeStep = this.activeStep < 3 ? this.activeStep + 1 : this.activeStep;
  }

  handlePrev() {
    this.activeStep = this.activeStep > 1 ? this.activeStep - 1 : this.activeStep;
  }

  handleUserDetailsSubmit(values: any) {
    this.userDetails = values;
    this.handleNext();
  }
}
