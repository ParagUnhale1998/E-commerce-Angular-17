import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPolicyReturnComponent } from './product-policy-return.component';

describe('ProductPolicyReturnComponent', () => {
  let component: ProductPolicyReturnComponent;
  let fixture: ComponentFixture<ProductPolicyReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPolicyReturnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductPolicyReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
