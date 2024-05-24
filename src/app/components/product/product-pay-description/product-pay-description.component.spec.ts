import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPayDescriptionComponent } from './product-pay-description.component';

describe('ProductPayDescriptionComponent', () => {
  let component: ProductPayDescriptionComponent;
  let fixture: ComponentFixture<ProductPayDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPayDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductPayDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
