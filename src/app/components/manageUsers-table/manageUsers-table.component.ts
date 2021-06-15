import { Component, Input, OnInit } from '@angular/core';
import { UserDetailModel } from 'src/app/models/user-model';

@Component({
  selector: 'app-manageUsers-table',
  templateUrl: './manageUsers-table.component.html',
  styleUrls: ['./manageUsers-table.component.sass']
})
export class ManageUsersTableComponent implements OnInit {
@Input() users: Array<UserDetailModel>=[]
  constructor() { }

  ngOnInit(): void {
  }

}
