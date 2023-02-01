import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from './../../services/cart.service';
import { DishService } from './../../services/dish.service';
import { RouterTestingModule } from "@angular/router/testing";
import { DishDetailViewComponent } from './dish-detail-view.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DishDetailViewComponent', () => {
  let component: DishDetailViewComponent;
  let fixture: ComponentFixture<DishDetailViewComponent>;
  let service: DishService;
  let fakeCartServiceMock: any
  let fakeDishServiceMock: any

  beforeEach(async () => {
    fakeCartServiceMock = {
      getTotal: jest.fn(),
    }
    fakeDishServiceMock = {
      getDishById: jest.fn(),
    }
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ DishDetailViewComponent ],
      providers: [
        {
          provide: CartService,
          useValue: fakeCartServiceMock
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
    fixture = TestBed.createComponent(DishDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  })
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
