import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileViewComponent } from './profile-view.component';
import { AuthService } from './../../services/auth.service'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ProfileViewComponent', () => {
  let component: ProfileViewComponent;
  let fixture: ComponentFixture<ProfileViewComponent>;
  let fakeAuthServiceMock: any

  beforeEach(async () => {
    fakeAuthServiceMock = {
      getUser: jest.fn(),
      logout: jest.fn(),
      updateData: jest.fn(),
    }
    await TestBed.configureTestingModule({
      declarations: [ ProfileViewComponent ],
      providers: [
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

    fixture = TestBed.createComponent(ProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
