import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from './../../services/cart.service';

import { CartViewComponent } from './cart-view.component';

describe('CartViewComponent', () => {
  let component: CartViewComponent;
  let fixture: ComponentFixture<CartViewComponent>;
  let fakeServiceMock: any

  beforeEach(async () => {
    fakeServiceMock = {
      getTotal: jest.fn(),
      getCartItems: jest.fn(),
      updateCart: jest.fn(),
      removeItemFromCart: jest.fn()
    }

    await TestBed.configureTestingModule({
      declarations: [ CartViewComponent ],
      providers: [{
        provide: CartService,
        useValue: fakeServiceMock
      }],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  })

  it('should create', () => {
    console.log(component,'component')
    expect(component).toBeTruthy();
  });
});
