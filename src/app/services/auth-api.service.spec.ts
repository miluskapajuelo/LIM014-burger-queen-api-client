import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';

import { AuthApiService } from './auth-api.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';

describe('AuthApiService', () => {
  let service: AuthApiService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: mockRouter },
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
    service = TestBed.inject(AuthApiService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  }
);

it('should be created', () => {
  expect(service).toBeTruthy();
});

it('should login auth', () => {

  const data = {
    token: 'ABC'
  };

  service.loginAuth({})
    .subscribe(
      (resp) => {
        expect(resp).toBe(data);
      }
    )
  const req = httpTestingController.expectOne(`${environment.domain}/auth`);
  expect(req.request.method).toEqual('POST');
  req.flush(data)
  httpTestingController.verify();
});
it('should be error', () => {
  const emsg = 'deliberate 404 error';
  service.loginAuth({}).subscribe(
    () => {
    },
    (error: HttpErrorResponse) => {
      expect(error.status).toEqual(404, 'status');
      expect(error.error).toEqual(emsg, 'message');
    }
  )
  const req = httpTestingController.expectOne(`${environment.domain}/auth`);
  req.flush(emsg, { status: 404, statusText: 'Not Found' });
  expect(req.request.method).toEqual('POST');
  httpTestingController.verify();
});
it('should be log out', () => {
  service.logOut()
  expect (mockRouter.navigate).toHaveBeenCalledWith (['login']);
  expect(localStorage.getItem('token')).toBeNull();
})
});
