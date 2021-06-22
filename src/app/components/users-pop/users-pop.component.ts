import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-pop',
  templateUrl: './users-pop.component.html',
  styleUrls: ['./users-pop.component.sass']
})
export class UsersPopComponent implements OnInit {


  @Output() closeModalUser: EventEmitter<any> = new EventEmitter()
  @Output() createUser: EventEmitter<{}> = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }


  closeModalUsers() {
    this.closeModalUser.emit()
  }
  createUsers(user:HTMLInputElement, price:HTMLInputElement){
    const userNew ={ user: user.value,
      price:price.value}
      this.createUser.emit(userNew)
    }


}
