import { UserDetailModel } from 'src/app/models/user-model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductDetailModel } from 'src/app/models/products-model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UsersPopComponent } from '../users-pop/users-pop.component';

@Component({
  selector: 'app-manageUsers-table',
  templateUrl: './manageUsers-table.component.html',
  styleUrls: ['./manageUsers-table.component.sass']
})
export class ManageUsersTableComponent implements OnInit {


  @Input() users: Array<UserDetailModel>=[]
  constructor(private dialog: MatDialog) { }

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
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false
    dialogConfig.autoFocus = true
    dialogConfig.width= "60%";
    dialogConfig.data="hola"
    this.dialog.open(UsersPopComponent, dialogConfig)
  }
  handleSearch(value:string){
    this.filterValue= value
  }

}




