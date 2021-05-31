import { Component, OnInit } from '@angular/core';
import { AuthApiService } from 'src/app/services/auth-api.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private authApiService: AuthApiService) { }

  ngOnInit() {
    this.getlist();
  }

  getlist() {
    this.authApiService.getById('http://localhost:3200/', 'users/', '001').subscribe(data => console.log(data));
  }

  login(email: any, password: any) {
    const body = {
      email: email.value,
      password: password.value
    }

    this.authApiService.loginAuth('http://localhost:3200/', 'auth', body)
      .subscribe((data: any) => {

        console.log(jwt_decode(data.resp.token));
        const rol = data.resp.token.rol;
      });

  }

}
