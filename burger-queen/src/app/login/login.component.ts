import { Component, OnInit } from '@angular/core';
import { DataApiService} from 'src/app/services/data-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private dataApiService: DataApiService){}

  ngOnInit() {
    this.getlist();
  }

  getlist(){
  this.dataApiService.getUserById('http://localhost:3200/', 'users/', '001').subscribe(data => console.log(data));}

  login(email: any, password: any, rol: any){
    console.log(email.value, password.value, rol.value)
    return false
  }

}
