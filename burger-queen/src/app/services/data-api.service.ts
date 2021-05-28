import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private httpClient: HttpClient) {
    console.log('is working http')
  }

  getAll(url: any, hash: any) {
    return this.httpClient.get(`${url}${hash}`);
  }
  getById(url: any, hash: any, uid: any) {
    return this.httpClient.get(`${url}${hash}${uid}`);
  }
  deleteById(url: any, hash: any, uid: any) {
    return this.httpClient.delete(`${url}${hash}${uid}`)
  }
  updateById(url: any, hash: any, uid: any, body: any) {
    return this.httpClient.put(`${url}${hash}${uid}`, body)
  }
  create(url: any, hash: any,body: any){
    return this.httpClient.post(`${url}${hash}`, body)
  }

  loginAuth(url: any, hash: any, body: any) {
    return this.httpClient.post(`${url}${hash}`, body)
  }
}
