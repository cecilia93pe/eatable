import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutViewComponent } from './checkout-view.component';
import { OrderService } from './../../services/order.service';
import { CartService } from './../../services/cart.service'
import { AuthService } from './../../services/auth.service'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CheckoutViewComponent', () => {
  let component: CheckoutViewComponent;
  let fixture: ComponentFixture<CheckoutViewComponent>;
  let fakeCartServiceMock: any
  let fakeOrderServiceMock: any
  let fakeAuthServiceMock: any

  beforeEach(async () => {
    fakeCartServiceMock = {
      getTotal: jest.fn(),
    }
    fakeOrderServiceMock = {
      createOrder: jest.fn(),
    }
    fakeAuthServiceMock = {
      getUser: jest.fn(),
    }
    await TestBed.configureTestingModule({
      declarations: [ CheckoutViewComponent ],
      providers: [
        {
          provide: CartService,
          useValue: fakeCartServiceMock
        },
        {
          provide: OrderService,
          useValue: fakeOrderServiceMock
        },
        {
          provide: AuthService,
          useValue: fakeAuthServiceMock
        },
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
