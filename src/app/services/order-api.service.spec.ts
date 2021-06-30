import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { OrderApiService } from './order-api.service';
import { environment } from 'src/environments/environment';
import { IAllOrderModel, IOrderModel } from '../models/orders-model';


describe('OrderApiService', () => {
  let service: OrderApiService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(OrderApiService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be getAllOrders', () => {
    const data: Array<IOrderModel> =
      [
        {
          "_id": "001",
          "userId": "M01",
          "client": "juana",
          "products": [
            {
              "qty": 1,
              "product": {
                "name": "hamburguesa",
                "id": "123"
              }
            },
            {
              "qty": 1,
              "product": {
                "name": "sprite",
                "id": "111"
              }
            }
          ],
          "status": "pending",
          "dateEntry": "2021-06-13 23:00:00",
          "dateProcesed": "2021-06-13 23:57:30"
        },
        {
          "_id": "002",
          "userId": "M01",
          "client": "petrica",
          "products": [
            {
              "qty": 1,
              "product": {
                "name": "hamburguesa",
                "id": "123"
              }
            },
            {
              "qty": 1,
              "product": {
                "name": "sprite",
                "id": "111"
              }
            }
          ],
          "status": "pending",
          "dateEntry": "2021-06-13 23:00:00",
          "dateProcesed": "2021-06-13 23:36:00"
        },
      ];

    service.getAllOrders().subscribe((resp) => {
      expect(resp).toBe(data);
    })
    const req = httpTestingController.expectOne(`${environment.domain}/orders`);
    expect(req.request.method).toEqual('GET');
    req.flush(data)
    httpTestingController.verify();

  })

  it('should Be getUserById', () => {

    const data: IOrderModel = {
      "_id": "001",
      "userId": "M01",
      "client": "petrica",
      "products": [
        {
          "qty": 1,
          "product": {
            "name": "hamburguesa",
            "id": "123",
          }
        },
        {
          "qty": 1,
          "product": {
            "name": "sprite",
            "id": "111",
          }
        }],
      "status": "pending",
      "dateEntry": "10/11/2021",
      "dateProcesed": "10/11/2021"
    };

    service.getOrderById('001')
      .subscribe(
        (resp) => {
          expect(resp).toBe(data);
        }
      )
    const req = httpTestingController.expectOne(`${environment.domain}/orders/001`);
    expect(req.request.method).toEqual('GET');
    req.flush(data)
    httpTestingController.verify();
  });

  it('should Be DeleteOrder', () => {

    const data: IOrderModel = {
      "_id": "001",
      "userId": "M01",
      "client": "petrica",
      "products": [
        {
          "qty": 1,
          "product": {
            "name": "hamburguesa",
            "id": "123",
          }
        },
        {
          "qty": 1,
          "product": {
            "name": "sprite",
            "id": "111",
          }
        }],
      "status": "pending",
      "dateEntry": "10/11/2021",
      "dateProcesed": "10/11/2021"
    };

    service.deleteOrder('001')
      .subscribe(
        (resp) => {
          expect(resp).toBe(data);
        }
      )
    const req = httpTestingController.expectOne(`${environment.domain}/orders/001`);
    expect(req.request.method).toEqual('DELETE');
    req.flush(data)
    httpTestingController.verify();
  });
  it('should Be updateOrder', () => {

    const data: IOrderModel = {
      "_id": "001",
      "userId": "M01",
      "client": "petrica",
      "products": [
        {
          "qty": 1,
          "product": {
            "name": "hamburguesa",
            "id": "123",
          }
        },
        {
          "qty": 1,
          "product": {
            "name": "sprite",
            "id": "111",
          }
        }],
      "status": "pending",
      "dateEntry": "10/11/2021",
      "dateProcesed": "10/11/2021"
    };

    service.updateOrder('001', data)
      .subscribe(
        (resp) => {
          expect(resp).toBe(data);
        }
      )
    const req = httpTestingController.expectOne(`${environment.domain}/orders/001`);
    expect(req.request.method).toEqual('PUT');
    req.flush(data)
    httpTestingController.verify();
  });

  it('should Be create', () => {

    const data: any = {
      "userId": "M01",
      "client": "petrica",
      "products": [
        {
          "qty": 1,
          "product": {
            "name": "hamburguesa",
            "id": "123",
          }
        },
        {
          "qty": 1,
          "product": {
            "name": "sprite",
            "id": "111",
          }
        }]
    };
    service.createOrder(data)
      .subscribe(
        (resp) => {
          expect(resp).toEqual(data);
        }
      )
    const req = httpTestingController.expectOne(`${environment.domain}/orders`);
    expect(req.request.method).toEqual('POST');
    req.flush(data)
    httpTestingController.verify();
  });

});
