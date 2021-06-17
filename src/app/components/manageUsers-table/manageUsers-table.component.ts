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
  constructor() { }

  filterValue = ''
  @Input() products: Array<ProductDetailModel> = []
  @Output() deleteUserId: EventEmitter<any> = new EventEmitter()
  @Output() updateUserById: EventEmitter<any> = new EventEmitter()



  ngOnInit(): void {
  }
  deleteUser(user:any){
    this.deleteUserId.emit(user)
  }
  updateUser(user:any){
    this.updateUserById.emit(user)
  }
  createUser(){

  }
  handleSearch(value:string){
    this.filterValue= value
  }

}




