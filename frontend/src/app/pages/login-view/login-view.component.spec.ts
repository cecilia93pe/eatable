import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from './../../services/auth.service';

import { LoginViewComponent } from './login-view.component';

describe('LoginViewComponent', () => {
  let component: LoginViewComponent;
  let fixture: ComponentFixture<LoginViewComponent>;
  let fakeAuthServiceMock: any

  beforeEach(async () => {
    fakeAuthServiceMock = {
      login: jest.fn(),
      singUp: jest.fn(),
    }
    await TestBed.configureTestingModule({
      declarations: [ LoginViewComponent ],
      providers: [{
        provide: AuthService,
        useValue: fakeAuthServiceMock
      }],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
