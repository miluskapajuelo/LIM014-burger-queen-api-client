import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { IAllOrderModel, IOrderModel } from '../models/orders-model';
import { ProductDetailModel } from '../models/products-model';

@Injectable({
  providedIn: 'root'
})
export class OrderApiService {
  private domain: string;
  private endpoint: string;

  constructor(private httpClient: HttpClient) {
    this.domain = environment.domain;
    this.endpoint = '/orders';
  }
  getAllOrders() {
    return this.httpClient.get<any>(`${this.domain}${this.endpoint}`);
  }
  getOrderById(uid: any) {
    return this.httpClient.get<IOrderModel>(`${this.domain}${this.endpoint}/${uid}`);
  }
  deleteOrder(uid: any,) {
    return this.httpClient.delete<IOrderModel>(`${this.domain}${this.endpoint}/${uid}`)
  }
  updateOrder(uid: any, body: any) {
    return this.httpClient.put<IOrderModel>(`${this.domain}${this.endpoint}/${uid}`, body)
  }
  createOrder(body: any) {
    return this.httpClient.post<Array<ProductDetailModel>>(`${this.domain}${this.endpoint}`, body,)
  }
}
