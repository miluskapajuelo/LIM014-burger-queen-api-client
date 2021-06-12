import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass']
})
export class SideNavComponent implements OnInit {
  options: Array<string> = [];
  isSelect: boolean = false;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.rolAcces()
  }
  rolAcces() {
    const token: any = localStorage.getItem('token')
    const roles: any = jwt_decode(token);
    console.log(roles.rol)


    let acces = [];
    if (roles.rol === 'Admin') {
      acces = ['Manag', 'History', 'Log Out']
    }
    else if (roles.rol === 'Waiter') {
      acces = ['Menu', 'Orders', 'Log Out']
    }
    else {
      acces = ['Orders', 'Log Out']
    }
    return this.options = acces;
  }

  select() {
    this.isSelect = this.isSelect ? false : true;
  }
  redirect(element: string) {
    console.log(element)
    /*  switch (element) {
        case 'Menu': this.router.navigate(['MenuView']);
        break
        case 'Orders':this.router.navigate(['Orders']);
        break
      case 'Log Out':
      }
  */

  }
}
