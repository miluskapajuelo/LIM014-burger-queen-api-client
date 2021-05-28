import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  login(email: any, password: any, rol: any){
    console.log(email.value, password.value, rol.value)
    return false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
