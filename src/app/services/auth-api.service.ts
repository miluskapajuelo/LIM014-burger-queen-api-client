import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  private domain: string;
  private endpoint: string;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.domain = environment.domain;
    this.endpoint = '/auth';
  }


  loginAuth(body: any) {
    return this.httpClient.post(`${this.domain}${this.endpoint}`, body)
  }
  logOut(){
    localStorage.clear();
    this.router.navigate(['login'])
  }

}
