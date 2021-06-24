import {
  Component, OnInit, Input, Output, EventEmitter
} from '@angular/core';
import {
  IOrderModel
} from 'src/app/models/orders-model';


@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.sass'
  ]
})
export class OrderTableComponent implements OnInit {
  @Input() item: IOrderModel = {} as IOrderModel;
  @Output() updateOrders: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void { }
  update(item: any) {
    this.updateOrders.emit(item)
  }
}
