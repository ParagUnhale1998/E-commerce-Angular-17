import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as Constants from '../../../core/constants/app.constants';

@Component({
  selector: 'app-follow-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './follow-us.component.html',
  styleUrl: './follow-us.component.scss'
})
export class FollowUsComponent {
  // instagramImages = [
  //   '/assets/follow-us/1.jpg',
  //   '/assets/follow-us/2.jpg',
  //   '/assets/follow-us/3.jpg',
  //   '/assets/follow-us/4.jpg',
  //   '/assets/follow-us/5.jpg',
  //   '/assets/follow-us/6.jpg',
  //   '/assets/follow-us/7.jpg',
  //   '/assets/follow-us/8.jpg',
  // ];

  instagramImages = Constants.INSTAGRAM_IMAGES;

}
