import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  private domain: string;
  private endpoint: string;

  constructor(private httpClient: HttpClient) {
    console.log('is working http');
    this.domain = environment.domain;
    this.endpoint = '/auth';
  }


  loginAuth(body: any) {
    return this.httpClient.post(`${this.domain}${this.endpoint}`, body)
  }
}
