import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFinalComponent } from './payment-final.component';

describe('PaymentFinalComponent', () => {
  let component: PaymentFinalComponent;
  let fixture: ComponentFixture<PaymentFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentFinalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
