import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as Constants from '../../../core/constants/app.constants';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  
})
export class CategoryComponent {


  // categoryImages = [
  //   { name: 'Shirt', image: 'snitch-store009.jpg' },
  //   { name: 'T-Shirt', image: 'snitch-store010.jpg' },
  //   { name: 'Jeans', image: 'snitch-store011.jpg' },
  //   { name: 'Pants', image: 'snitch-store012.jpg' },
  //   { name: 'Shorts', image: 'snitch-store013.jpg' },
  //   { name: 'Coords', image: 'snitch-store014.jpg' },
  //   { name: 'Jacket', image: 'snitch-store015.jpg' },
  //   { name: 'Inner', image: 'snitch-store016.jpg' },
  //   { name: 'Shoes', image: 'snitch-store017.webp' },
  //   { name: 'Perfume', image: 'snitch-store018.jpg' },
  //   { name: 'Sunglasses', image: 'snitch-store019.jpg' },
  //   { name: 'Accessories', image: 'snitch-store020.webp' }
  // ];

  categoryImages = Constants.CATEGORY_IMAGES;

  constructor(private router: Router) {}


  handleClick(category: string) {
    this.router.navigate(['/products'], { queryParams: { search: category } });
  }
}
