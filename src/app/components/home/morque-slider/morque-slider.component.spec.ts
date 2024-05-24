import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorqueSliderComponent } from './morque-slider.component';

describe('MorqueSliderComponent', () => {
  let component: MorqueSliderComponent;
  let fixture: ComponentFixture<MorqueSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MorqueSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MorqueSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
