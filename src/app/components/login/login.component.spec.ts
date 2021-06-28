import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthApiService } from 'src/app/services/auth-api.service';
import { Router } from '@angular/router';
import { ModuleTesting } from 'src/app/testing-module';

import { LoginComponent } from './login.component';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authApiService: any;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        ...ModuleTesting
      ], providers: [
        { provide: Router, useValue: mockRouter },
        { provide: AuthApiService }
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents();
  });

  beforeEach((inject([AuthApiService], (s: any) => {
    authApiService = s;
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should be login', async () => {
    const response = {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGM5MmMxM2NjNTMzNTBmMzkwNDk5ZGQiLCJlbWFpbCI6ImFkbWluQGxvY2FsaG9zdCIsInJvbGVzIjp7ImFkbWluIjp0cnVlfSwiaWF0IjoxNjIzNzk2ODg0LCJleHAiOjE2MjM4MDA0ODR9.8tDX3i4afFU7TAFfvg11ngvIJOYgZZ2oQDpLu0xYrpg"
    }

    component.form.setValue({
      email: 'admi@gmail.com',
      password: 'admi123'
    });
    spyOn(authApiService, 'loginAuth').and.returnValue(of(response))
    component.login()
    fixture.detectChanges();
    fixture.whenStable().then(() => {
    });
    expect(mockRouter.navigate).toHaveBeenCalled()
    expect(authApiService.loginAuth).toHaveBeenCalled()

  })
});
