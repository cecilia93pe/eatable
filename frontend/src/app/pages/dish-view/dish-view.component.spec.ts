import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishViewComponent } from './dish-view.component';
import { DishService } from './../../services/dish.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('DishViewComponent', () => {
  let component: DishViewComponent;
  let fixture: ComponentFixture<DishViewComponent>;
  let fakeDishServiceMock: any

  beforeEach(async () => {
    fakeDishServiceMock = {
      getDishes: jest.fn(),
    }
    await TestBed.configureTestingModule({
      declarations: [ DishViewComponent ],
      providers: [
        {
          provide: DishService,
          useValue: fakeDishServiceMock
        },
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
