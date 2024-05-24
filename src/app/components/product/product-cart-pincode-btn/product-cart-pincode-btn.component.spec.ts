import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCartPincodeBtnComponent } from './product-cart-pincode-btn.component';

describe('ProductCartPincodeBtnComponent', () => {
  let component: ProductCartPincodeBtnComponent;
  let fixture: ComponentFixture<ProductCartPincodeBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCartPincodeBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductCartPincodeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
