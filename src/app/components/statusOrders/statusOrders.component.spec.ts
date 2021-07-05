import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { StatusOrdersComponent } from './statusOrders.component'
import {
  OrderApiService
} from '../../services/order-api.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('StatusOrdersComponentt', () => {
  let component: StatusOrdersComponent;
  let fixture: ComponentFixture<StatusOrdersComponent>;
  let orderApiService: OrderApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatusOrdersComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  });

  beforeEach((inject([OrderApiService], (s: OrderApiService) => {
    orderApiService = s;
    fixture = TestBed.createComponent(StatusOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be changeFalse', () => {
    component.changeFalse()
    expect(component.clicked).toBeFalse()
  })
  it('should be changeTrue', () => {
    component.changeTrue()
    expect(component.clicked).toBeTrue()
  })
  it('Should be getAllOrders', () => {
    const response = [
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
        "status": "delivering",
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
        "dateEntry": "2021-06-13 24:00:00",
        "dateProcesed": "2021-06-13 23:36:00"
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
        "status": "delivering",
        "dateEntry": "2021-06-13 24:00:00",
        "dateProcesed": "2021-06-13 23:36:00"
      }];
    spyOn(orderApiService, 'getAllOrders').and.returnValue(of(response))
    component.getOrders()
    fixture.detectChanges();
    fixture.whenStable()
    expect(orderApiService.getAllOrders).toHaveBeenCalled()

  })
  it('Should be getAllOrders error', () => {

    spyOn(orderApiService, 'getAllOrders').and.returnValue(throwError('ERROR'))
    component.getOrders()
    fixture.detectChanges();
    fixture.whenStable()
    expect(orderApiService.getAllOrders).toHaveBeenCalled()

  })

  it('should be updateOrder pending ', () => {
    const response = {
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
    }
    spyOn(orderApiService, 'updateOrder').and.returnValue(of(response))
    component.updateOrders(response)
    fixture.detectChanges();
    fixture.whenStable().then(() => {

    });
    expect(orderApiService.updateOrder).toHaveBeenCalled()
  })

  it('should be updateOrder pending ', () => {
    const response = {
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
      "status": "delivering",
      "dateEntry": "2021-06-13 23:00:00",
      "dateProcesed": "2021-06-13 23:57:30"
    }
    spyOn(orderApiService, 'updateOrder').and.returnValue(of(response))
    component.updateOrders(response)
    fixture.detectChanges();
    fixture.whenStable();
    expect(orderApiService.updateOrder).toHaveBeenCalled()
  })
  it('Should be update orders error', () => {
    const response = {
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
        }
      ],
      "status": "delivering",
      "dateEntry": "2021-06-13 23:00:00",
      "dateProcesed": "2021-06-13 23:57:30"
    }
    spyOn(orderApiService, 'updateOrder').and.returnValue(throwError('ERROR'))
    component.updateOrders(response)
    fixture.detectChanges();
    fixture.whenStable()
    expect(orderApiService.updateOrder).toHaveBeenCalled()

  })
});
