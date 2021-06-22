import { UserDetailModel } from 'src/app/models/user-model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductDetailModel } from 'src/app/models/products-model';


@Component({
  selector: 'app-manageUsers-table',
  templateUrl: './manageUsers-table.component.html',
  styleUrls: ['./manageUsers-table.component.sass']
})
export class ManageUsersTableComponent implements OnInit {


  @Input() users: Array<UserDetailModel>=[]
  filterValue: string
  clicked: boolean;
  @Input() activeProducts:boolean
  @Input() products: Array<ProductDetailModel> = []
  @Output() deleteUserById: EventEmitter<any> = new EventEmitter()
  @Output() openModalUser: EventEmitter<any> = new EventEmitter()


  constructor() {
    this.filterValue = ''
    this.clicked = false
  }

  ngOnInit(): void {
  }
  deleteUser(product: any) {
    this.deleteUserById.emit(product)
    this.clicked = false
  }
  handleSearch(value: string) {
    this.filterValue = value
  }
  openModalUsers(product:any) {
      this.openModalUser.emit(product)
  }

}




