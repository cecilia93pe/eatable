import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { DishService } from './dish.service';

describe('DishService', () => {
  let service: DishService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(DishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
