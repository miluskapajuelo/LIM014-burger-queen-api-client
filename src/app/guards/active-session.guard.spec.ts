import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { ActiveSessionGuard } from './active-session.guard';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthGuard', () => {
  let injector: TestBed;
  let guard: ActiveSessionGuard;
  let routeMock: any = { snapshot: {} };
  let routeStateMock: any = { snapshot: {}, url: '/waiter' };
  let routerMock = { navigate: jasmine.createSpy('navigate') }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActiveSessionGuard, { provide: Router, useValue: routerMock },],
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    guard = injector.inject(ActiveSessionGuard);
  });

  afterEach(() => {

    localStorage.removeItem('token');
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should redirect  user to the login', () => {
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGM5MmMxM2NjNTMzNTBmMzkwNDk5ZGQiLCJlbWFpbCI6ImFkbWluQGxvY2FsaG9zdCIsInJvbGVzIjp7ImFkbWluIjp0cnVlfSwiaWF0IjoxNjIzNzk2ODg0LCJleHAiOjE2MjM4MDA0ODR9.8tDX3i4afFU7TAFfvg11ngvIJOYgZZ2oQDpLu0xYrpg');

    expect(guard.canActivate(routeMock, routeStateMock)).toBeTrue();
  });

  it('should not redirect  user to the login', () => {
    expect(guard.canActivate(routeMock, routeStateMock)).toBeFalse();
    expect(routerMock.navigate).toHaveBeenCalled();
  });
});
