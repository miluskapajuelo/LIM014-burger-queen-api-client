import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.sass']
})
export class TotalComponent implements OnInit {

  @Input() total:number = 0;


  constructor() { }

  ngOnInit(): void {
  }

}
