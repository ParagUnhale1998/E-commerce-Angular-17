import { Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./layout/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'products',
        loadComponent: () => import('./layout/all-products/all-products.component').then(m => m.AllProductsComponent)
      },
      {
        path: 'products/:id',
        loadComponent: () => import('./layout/product/product.component').then(m => m.ProductComponent)
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
