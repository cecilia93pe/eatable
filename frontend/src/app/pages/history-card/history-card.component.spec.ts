import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCardComponent } from './history-card.component';
import { AuthService } from './../../services/auth.service'

describe('HistoryCardComponent', () => {
  let component: HistoryCardComponent;
  let fixture: ComponentFixture<HistoryCardComponent>;
  let fakeAuthServiceMock: any

  beforeEach(async () => {
    fakeAuthServiceMock = {
      currentUser: ''
    }
    await TestBed.configureTestingModule({
      declarations: [ HistoryCardComponent ],
      providers: [

        {
          provide: AuthService,
          useValue: fakeAuthServiceMock
        },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
