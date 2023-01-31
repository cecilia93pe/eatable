import { TestBed } from '@angular/core/testing';

import { DishesInterceptorService } from './dishes-interceptor.service';

describe('DishesInterceptorService', () => {
  let service: DishesInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishesInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
