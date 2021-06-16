import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-users-pop',
  templateUrl: './users-pop.component.html',
  styleUrls: ['./users-pop.component.sass']
})
export class UsersPopComponent implements OnInit {

  constructor(private userApiService:UserApiService) { }

  ngOnInit(): void {
  }

  savenew(admin:any, email:any){
    const userNew = { admin: admin.value, email:email.value}
    this.userApiService.createUser(userNew).subscribe(user => console.log(user ));
  }
}
