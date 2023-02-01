import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from './../../services/cart.service'
import { DishService } from './../../services/dish.service';
import { OrderService } from './../../services/order.service';

import { HistoryViewComponent } from './history-view.component';

describe('HistoryViewComponent', () => {
  let component: HistoryViewComponent;
  let fixture: ComponentFixture<HistoryViewComponent>;
  let fakeCartServiceMock: any
  let fakeOrderServiceMock: any
  let fakeDishServiceMock: any

  beforeEach(async () => {
    fakeCartServiceMock = {
      getTotal: jest.fn(),
    }
    fakeOrderServiceMock = {
      getAll: jest.fn(),
    }
    fakeDishServiceMock = {
      getDishById: jest.fn(),
    }
    await TestBed.configureTestingModule({
      declarations: [ HistoryViewComponent ],
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
          provide: DishService,
          useValue: fakeDishServiceMock
        },
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();

  });

  beforeEach(() => {

    fixture = TestBed.createComponent(HistoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
