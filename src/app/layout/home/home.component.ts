import { Component } from '@angular/core';
import { CategoryComponent } from '../../components/home/category/category.component';
import { SliderComponent } from '../../components/home/slider/slider.component';
import { MorqueSliderComponent } from '../../components/home/morque-slider/morque-slider.component';
import { FilterSectionComponent } from '../../components/home/filter-section/filter-section.component';
import { FilterTabsComponent } from '../../components/home/filter-tabs/filter-tabs.component';
import { SeasonFavComponent } from '../../components/home/season-fav/season-fav.component';
import { FollowUsComponent } from '../../components/home/follow-us/follow-us.component';
import { SubscribeComponent } from '../../components/home/subscribe/subscribe.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CategoryComponent,
    SliderComponent,
    MorqueSliderComponent,
    FilterSectionComponent,
    FilterTabsComponent,
    SeasonFavComponent,
    FollowUsComponent,
    SubscribeComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  accessoriesCategories = ['Perfume', 'Shoes', 'Sunglasses', 'Accessories']; // Define the categories here
  ClothsCategories = ['Shirts', ' T-shirt', 'Jeans', 'Trousers']; // Define the categories here
}
