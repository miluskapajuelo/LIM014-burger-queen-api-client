import { Component, OnInit } from '@angular/core';
import { AuthApiService } from 'src/app/services/auth-api.service';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private authApiService: AuthApiService, private router: Router) { }

  ngOnInit() {
  }

  login(email: any, password: any) {
    const body = {
      email: email.value,
      password: password.value
    }

    this.authApiService.loginAuth(body)
      .subscribe((data: any) => {
        console.log(data)
        window.localStorage.setItem('token', data.resp.token);
        const token = localStorage.getItem('token');
        console.log('objeto decode', jwt_decode(data.resp.token));
        this.router.navigate(['admin']);

      });

  }

}
