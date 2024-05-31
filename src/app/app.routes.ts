import { Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'home',
        title: 'Snitch-Home',
        loadComponent: () => import('./layout/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'products',
        title: 'Snitch-Products',
        loadComponent: () => import('./layout/all-products/all-products.component').then(m => m.AllProductsComponent)
      },
      {
        path: 'products/:id',
        title: 'Snitch-Product',
        loadComponent: () => import('./layout/product/product.component').then(m => m.ProductComponent)
      },
      {
        path: 'login',
        title: 'Snitch-Login',
        loadComponent: () => import('./layout/login/login.component').then(m => m.LoginComponent)
      },
      {
        path: 'profile',
        title: 'Snitch-Profile',
        loadComponent: () => import('./layout/user-profile/user-profile.component').then(m => m.UserProfileComponent),canActivate: [authGuard]
      },
      {
        path: 'checkout',
        title: 'Snitch-Checkout',
        loadComponent: () => import('./layout/checkout/checkout.component').then(m => m.CheckoutComponent),canActivate: [authGuard]
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '/home'
      }
];
