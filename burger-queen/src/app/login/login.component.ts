import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private dataApiService: DataApiService) { }

  ngOnInit() {
    this.getlist();
  }

  getlist() {
    this.dataApiService.getById('http://localhost:3200/', 'users/', '001').subscribe(data => console.log(data));
  }

  login(email: any, password: any) {
    const body = {
      email: email.value,
      password: password.value
    }
    return this.dataApiService.loginAuth('http://localhost:3200/', 'auth', body).subscribe(data => console.log(data));

  }

}
