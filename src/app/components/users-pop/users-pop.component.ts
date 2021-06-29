import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-pop',
  templateUrl: './users-pop.component.html',
  styleUrls: ['./users-pop.component.sass']
})
export class UsersPopComponent implements OnInit {


  @Output() closeModalUser: EventEmitter<any> = new EventEmitter()
  @Output() createUser: EventEmitter<{}> = new EventEmitter()
  admin:Array<String>


  constructor() {

  this.admin = ['yes', 'no'];
  }


  myForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    rol: new FormControl('',Validators.required),
  })



  ngOnInit(): void {
  }

  //close modal
  closeModalUsers() {
    this.closeModalUser.emit()
  }

  //submit form
   onSubmit() {
    const userNew=this.myForm.value;
    this.createUser.emit(userNew)
    this.myForm.reset()
    this.closeModalUsers()
  }

}
