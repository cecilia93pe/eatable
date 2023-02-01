import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutViewComponent } from './checkout-view.component';
import { OrderService } from './../../services/order.service';
import { CartService } from './../../services/cart.service'
import { AuthService } from './../../services/auth.service'
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

describe('CheckoutViewComponent', () => {
  let component: CheckoutViewComponent;
  let fixture: ComponentFixture<CheckoutViewComponent>;
  let fakeCartServiceMock: any
  let fakeOrderServiceMock: any
  let fakeAuthServiceMock: any
  let fakeToastServiceMock: any

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
    fakeToastServiceMock = {
      success: jest.fn(),
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
        {
          provide: ToastrService,
          useValue: fakeToastServiceMock
        }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
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
