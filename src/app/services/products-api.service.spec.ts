import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { ProductsApiService } from './products-api.service';
import { IProductsModel, ProductDetailModel } from '../models/products-model';

describe('ProductsApiService', () => {
  let service: ProductsApiService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ProductsApiService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be getProducts', () => {
    const data: IProductsModel = {
      "products": [
        {
          "_id": "001",
          "name": "Ham and-cheese sandwich",
          "price": 14,
          "type": "burger",
        },
        {
          "_id": "002",
          "name": "Simple burger",
          "price": 14,
          "type": "burger",
        }
      ]
    }

    service.getAllProducts().subscribe((resp) => {
      expect(resp).toBe(data);
    })
    const req = httpTestingController.expectOne(`${environment.domain}/products`);
    expect(req.request.method).toEqual('GET');
    req.flush(data)
    httpTestingController.verify();

  })
  it('should be getProductsById', () => {
    const data: ProductDetailModel =
    {
      "_id": "001",
      "name": "Ham and-cheese sandwich",
      "price": 14,
      "type": "burger",
    }

    service.getProductsById('001').subscribe((resp) => {
      expect(resp).toBe(data);
    })
    const req = httpTestingController.expectOne(`${environment.domain}/products/001`);
    expect(req.request.method).toEqual('GET');
    req.flush(data)
    httpTestingController.verify();

  })
  it('should be deleteProducts', () => {
    const data: ProductDetailModel =
    {
      "_id": "001",
      "name": "Ham and-cheese sandwich",
      "price": 14,
      "type": "burger",
    }

    service.deleteProducts('001').subscribe((resp) => {
      expect(resp).toBe(data);
    })
    const req = httpTestingController.expectOne(`${environment.domain}/products/001`);
    expect(req.request.method).toEqual('DELETE');
    req.flush(data)
    httpTestingController.verify();

  })
  it('should be UpdateProducts', () => {
    const data: ProductDetailModel =
    {
      "_id": "001",
      "name": "Ham and-cheese sandwich",
      "price": 14,
      "type": "burger",
    }

    service.updateProducts('001', data).subscribe((resp) => {
      expect(resp).toBe(data);
    })
    const req = httpTestingController.expectOne(`${environment.domain}/products/001`);
    expect(req.request.method).toEqual('PUT');
    req.flush(data)
    httpTestingController.verify();

  })
  it('should be createProducts', () => {
    const data: ProductDetailModel =
    {
      "_id": "001",
      "name": "Ham and-cheese sandwich",
      "price": 14,
      "type": "burger",
    }

    service.createProducts(data).subscribe((resp) => {
      expect(resp).toBe(data);
    })
    const req = httpTestingController.expectOne(`${environment.domain}/products`);
    expect(req.request.method).toEqual('POST');
    req.flush(data)
    httpTestingController.verify();

  })
});
