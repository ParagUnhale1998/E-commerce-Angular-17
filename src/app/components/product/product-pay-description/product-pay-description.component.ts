import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-pay-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-pay-description.component.html',
  styleUrl: './product-pay-description.component.scss'
})
export class ProductPayDescriptionComponent {

  activeTab: string | null = null;

  handleTabClick(tab: string) {
    this.activeTab = this.activeTab === tab ? null : tab;
  }
}