import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { IProductsModel } from '../models/products-model'


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
    return this.httpClient.get<Array<IProductsModel>>(`${this.domain}${this.endpoint}`);
  }
  getProductsById(uid: any) {
    return this.httpClient.get<IProductsModel>(`${this.domain}${this.endpoint}${uid}`);
  }
  deleteProducts(uid: any,) {
    return this.httpClient.delete<IProductsModel>(`${this.domain}${this.endpoint}${uid}`)
  }
  updateProducts(uid: any, body: any) {
    return this.httpClient.put<IProductsModel>(`${this.domain}${this.endpoint}${uid}`, body)
  }
  createProducts(body: any) {
    return this.httpClient.post<IProductsModel>(`${this.domain}${this.endpoint}`, body)
  }
}
