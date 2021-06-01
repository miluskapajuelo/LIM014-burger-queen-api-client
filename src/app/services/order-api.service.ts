import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment';

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
    const headers = new HttpHeaders().append('Authorization', 'token');
    return this.httpClient.get(`${this.domain}${this.endpoint}`, {
      headers
    });
  }
  getOrderById(uid: any) {
    const headers = new HttpHeaders().append('Authorization', 'token');
    return this.httpClient.get(`${this.domain}${this.endpoint}${uid}`, { headers });
  }
  deleteOrder(uid: any,) {
    const headers = new HttpHeaders().append('Authorization', 'token');
    return this.httpClient.delete(`${this.domain}${this.endpoint}${uid}`, { headers })
  }
  updateOrder(uid: any, body: any) {
    const headers = new HttpHeaders().append('Authorization', 'token');
    return this.httpClient.put(`${this.domain}${this.endpoint}${uid}`, body, { headers })
  }
  createOrder(body: any) {
    const headers = new HttpHeaders().append('Authorization', 'token');
    return this.httpClient.post(`${this.domain}${this.endpoint}`, body, { headers })
  }
}
