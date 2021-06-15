import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.sass']
})


export class ManageComponent implements OnInit {
  clicked: boolean;
  constructor() {
    this.clicked = true;
  }

  ngOnInit(): void {
  }
  changeFalse() {
    this.clicked = false
  }
  changeTrue() {
    this.clicked = true
  }
}
