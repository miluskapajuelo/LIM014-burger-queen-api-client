import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { IUserModel, UserDetailModel } from '../models/user-model'

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
    return this.httpClient.get<IUserModel>(`${this.domain}${this.endpoint}`);
  }
  getUserById(uid: any) {
    return this.httpClient.get<UserDetailModel>(`${this.domain}${this.endpoint}/${uid}`);
  }
  deleteUser(uid: any,) {
    return this.httpClient.delete<UserDetailModel>(`${this.domain}${this.endpoint}/${uid}`)
  }
  updateUser(uid: any, body: any) {
    return this.httpClient.put<UserDetailModel>(`${this.domain}${this.endpoint}/${uid}`, body)
  }
  createUser(body: any) {
    return this.httpClient.post<UserDetailModel>(`${this.domain}${this.endpoint}`, body)
  }
}
