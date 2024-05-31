import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import * as Constants from '../../../core/constants/app.constants';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [SlickCarouselModule ,CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent{
  // images = [
  //   '/assets/sliders/2.png',
  //   '/assets/sliders/3.png',
  //   '/assets/sliders/1.png',
  //   '/assets/sliders/2.png',
  //   '/assets/sliders/3.png',
  //   '/assets/sliders/1.png',
  //   '/assets/sliders/2.png',
  //   '/assets/sliders/3.png',
  //   '/assets/sliders/1.png',
  // ];


  images = Constants.SLIDER_IMAGES;


  slideConfig = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    speed:1000,
    
  };

  constructor(private router: Router) {}

 

  handleClick() {
    this.router.navigate(['/products']);
  }

}
