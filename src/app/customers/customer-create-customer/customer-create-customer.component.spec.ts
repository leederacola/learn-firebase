import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCreateCustomerComponent } from './customer-create-customer.component';

describe('CustomerCreateCustomerComponent', () => {
  let component: CustomerCreateCustomerComponent;
  let fixture: ComponentFixture<CustomerCreateCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCreateCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCreateCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
