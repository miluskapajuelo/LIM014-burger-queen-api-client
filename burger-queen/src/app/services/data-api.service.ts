import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor( private httpClient: HttpClient) {
    console.log('is working http')
  }

    getUserById(url:any,hash:any, uid:any){
      return this.httpClient.get(`${url}${hash}${uid}`);
   }
    getAll(url:any,hash:any){
    return this.httpClient.get(`${url}${hash}`);
 }
}
