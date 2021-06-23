import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { AuthApiService } from "../../services/auth-api.service"

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass']
})
export class SideNavComponent implements OnInit {
  options: Array<string>
  isSelect: boolean
  constructor(private router: Router, private authApiService: AuthApiService) {
    this.options = []
    this.isSelect = false
  }

  ngOnInit(): void {
    this.rolAcces()

  }
  rolAcces() {
    const token: any = localStorage.getItem('token')
    console.log('token', token);
    const roles: any = jwt_decode(token);

    let acces = [];
    if (roles.roles.admin) {
      acces = ['Manag', 'Menu', 'Orders', 'Log Out']
    }
    else {
      acces = ['Menu', 'Orders', 'Log Out']
    }
    return this.options = acces;
  }

  select() {
    this.isSelect = this.isSelect ? false : true;
  }
  //redirect to view
  redirect(element: string) {
    switch (element) {
      case 'Menu': this.router.navigate(['waiter']);
        break
      case 'Orders': this.router.navigate(['statusOrders']);
        break
      case 'Log Out': this.authApiService.logOut();
        break
      case 'Manag': this.router.navigate(['manage'])
        break
    }


  }
}
