import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-season-fav',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './season-fav.component.html',
  styleUrl: './season-fav.component.scss'
})
export class SeasonFavComponent {
  products = [
    {
      image: '/assets/Seasonal-Fav/snitch-store053.jpg',
      name: 'essentials',
    },
    {
      image: '/assets/Seasonal-Fav/snitch-store054.jpg',
      name: 'oversized',
    },
    {
      image: '/assets/Seasonal-Fav/snitch-store055.jpg',
      name: 'chinos',
    },
    {
      image: '/assets/Seasonal-Fav/snitch-store056.jpg',
      name: 'casual',
    },
  ];

}
