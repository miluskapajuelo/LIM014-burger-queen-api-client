import { Component, OnInit } from '@angular/core';
import { AuthApiService } from 'src/app/services/auth-api.service';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  constructor(private authApiService: AuthApiService, private router: Router) { }
  error: boolean = false;
  errorMessage: string = 'Incorret Email or Password';

  ngOnInit() {
  }

  login(email: any, password: any) {
    const body = {
      email: email.value,
      password: password.value
    }

    this.authApiService.loginAuth(body)
      .pipe(
        catchError((error) => {

          console.log('error', error);

          if (error.status === 400) {
            this.error = true;
            console.log('error de credenciales');
          }
          return throwError(error);
        })
      )
      .subscribe((data: any) => {
        this.error = false;
        window.localStorage.setItem('token', data.resp.token);
        const token: any = jwt_decode(data.resp.token);
        if (token.rol === 'admi') {
          this.router.navigate(['admin']);
        }
        else if (token.rol === 'chef') {
          this.router.navigate(['chef']);
        } else {
          this.router.navigate(['waiter']);
        }


      });

  }

}
