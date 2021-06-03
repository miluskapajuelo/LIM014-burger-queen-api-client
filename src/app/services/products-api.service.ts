import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { ProductsInterface } from '../models/products-interface'


@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  private domain: string;
  private endpoint: string;
  constructor(private httpClient: HttpClient) {
    this.domain = environment.domain;
    this.endpoint = '/products';
  }
  getAllProducts() {
    const headers = new HttpHeaders().append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJBZG1pbiBlc3BlcmFuY2l0byIsInJvbCI6IkFkbWluIiwiaWQiOiIwMDEifQ.fqOvfxye5JG-gfsE9jpbrbdyIggLQISN2VoiIVlyVuE');
    return this.httpClient.get<ProductsInterface>(`${this.domain}${this.endpoint}`, {
      headers
    });

  }
  getProductsById(uid: any) {
    const headers = new HttpHeaders().append('Authorization', 'token');
    return this.httpClient.get(`${this.domain}${this.endpoint}${uid}`, { headers });
  }
  deleteProducts(uid: any,) {
    const headers = new HttpHeaders().append('Authorization', 'token');
    return this.httpClient.delete(`${this.domain}${this.endpoint}${uid}`, { headers })
  }
  updateProducts(uid: any, body: any) {
    const headers = new HttpHeaders().append('Authorization', 'token');
    return this.httpClient.put(`${this.domain}${this.endpoint}${uid}`, body, { headers })
  }
  createProducts(body: any) {
    const headers = new HttpHeaders().append('Authorization', 'token');
    return this.httpClient.post(`${this.domain}${this.endpoint}`, body, { headers })
  }
}
