import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('token');

    if (token) {

      const headers = new HttpHeaders().append('Authorization', `Bearer ${token}`);
      req = req.clone({
        headers
      });
    }

    return next.handle(req)
      .pipe(
        catchError((error) => {

          if (error.status >= 500) {
            console.log('error de servidor');
          }

          return throwError(error);
        })
      );
  }
}