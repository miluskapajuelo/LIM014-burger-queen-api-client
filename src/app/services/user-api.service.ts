import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private domain: string;
  private endpoint: string;

  constructor(private httpClient: HttpClient) {
    this.domain = environment.domain;
    this.endpoint = '/users';
  }
  getAllUsers() {
    return this.httpClient.get(`${this.domain}${this.endpoint}`);
  }
  getUserById(uid: any) {
    return this.httpClient.get(`${this.domain}${this.endpoint}${uid}`);
  }
  deleteUser(uid: any,) {
    return this.httpClient.delete(`${this.domain}${this.endpoint}${uid}`)
  }
  updateUser(uid: any, body: any) {
    return this.httpClient.put(`${this.domain}${this.endpoint}${uid}`, body)
  }
  createUser(body: any) {
    return this.httpClient.post(`${this.domain}${this.endpoint}`, body)
  }
}
