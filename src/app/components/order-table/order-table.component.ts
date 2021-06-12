import { Component, OnInit, Input
} from '@angular/core';
import { IOrderModel
} from 'src/app/models/orders-model';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.sass'
  ]
})
export class OrderTableComponent implements OnInit {
  @Input()item:IOrderModel ={} as IOrderModel;
  constructor() {}

  ngOnInit(): void {}
}
