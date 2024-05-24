import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonFavComponent } from './season-fav.component';

describe('SeasonFavComponent', () => {
  let component: SeasonFavComponent;
  let fixture: ComponentFixture<SeasonFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeasonFavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeasonFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
