import {
  Component, OnInit, Input, Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.sass'
  ]
})
export class OrderTableComponent implements OnInit {
  @Input() item: any;
  @Output() updateOrders: EventEmitter<any> = new EventEmitter()
  constructor() {
    this.item = {}
  }

  ngOnInit(): void {
  }
  update(item: any) {
    this.updateOrders.emit(item)
  }
}
