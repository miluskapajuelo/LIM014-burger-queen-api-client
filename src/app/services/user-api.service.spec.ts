import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserApiService } from './user-api.service';
import { UserDetailModel } from '../models/user-model';

describe('UserApiService', () => {
  let service: UserApiService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(UserApiService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be getAllUsers', () => {
    const data: Array< UserDetailModel > =[
      {
        "_id": "01",
        "email": "Admi@gmail.com",
        "roles": {
          "admin": true
        }
      },
      {
        "_id": "02",
        "email": "chef@gmail.com",
        "roles": {
          "admin": false
        }
      }
    ]
    service.getAllUsers().subscribe((resp) => {
      expect(resp).toBe(data);
    })
    const req = httpTestingController.expectOne(`${environment.domain}/users`);
    expect(req.request.method).toEqual('GET');
    req.flush(data)
    httpTestingController.verify();

  })
  it('should be get user by id', () => {
    const data: UserDetailModel = {
      "_id": "01",
      "email": "Admi@gmail.com",
      "roles": {
        "admin": true
      }
    }

    service.getUserById('001').subscribe((resp) => {
      expect(resp).toBe(data);
    })
    const req = httpTestingController.expectOne(`${environment.domain}/users/001`);
    expect(req.request.method).toEqual('GET');
    req.flush(data)
    httpTestingController.verify();

  })

  it('should be deleteUsers', () => {
    const data: UserDetailModel = {
      "_id": "01",
      "email": "Admi@gmail.com",
      "roles": {
        "admin": true
      }
    }
    service.deleteUser('001').subscribe((resp) => {
      expect(resp).toBe(data);
    })
    const req = httpTestingController.expectOne(`${environment.domain}/users/001`);
    expect(req.request.method).toEqual('DELETE');
    req.flush(data)
    httpTestingController.verify();
  })
  it('should be updateUsers', () => {
    const data: UserDetailModel = {
      "_id": "01",
      "email": "Admi@gmail.com",
      "roles": {
        "admin": true
      }
    }
    service.updateUser('001', data).subscribe((resp) => {
      expect(resp).toBe(data);
    })
    const req = httpTestingController.expectOne(`${environment.domain}/users/001`);
    expect(req.request.method).toEqual('PUT');
    req.flush(data)
    httpTestingController.verify();
  })
  it('should be createUsers', () => {
    const data: UserDetailModel = {
      "_id": "01",
      "email": "Admi@gmail.com",
      "roles": {
        "admin": true
      }
    }
    service.createUser(data).subscribe((resp) => {
      expect(resp).toBe(data);
    })
    const req = httpTestingController.expectOne(`${environment.domain}/users`);
    expect(req.request.method).toEqual('POST');
    req.flush(data)
    httpTestingController.verify();
  })
});
