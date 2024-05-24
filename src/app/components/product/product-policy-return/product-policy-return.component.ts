import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-policy-return',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-policy-return.component.html',
  styleUrl: './product-policy-return.component.scss'
})
export class ProductPolicyReturnComponent {

  activeTab: number = 0;

  handleTabClick(tabIndex: number) {
    this.activeTab = tabIndex;
  }
}
