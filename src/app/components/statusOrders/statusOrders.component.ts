import {
  Component, OnInit
} from '@angular/core';
import {
  IOrderModel
} from 'src/app/models/orders-model';
import {
  OrderApiService
} from '../../services/order-api.service'
@Component({
  selector: 'app-statusOrders',
  templateUrl: './statusOrders.component.html',
  styleUrls: ['./statusOrders.component.sass'
  ]
})
export class StatusOrdersComponent implements OnInit {
  clicked: boolean;
  items: Array<IOrderModel>;
  itemPending: Array<IOrderModel>;
  itemDelivering: Array<IOrderModel>;


  constructor(private OrderApiService: OrderApiService) {
    this.clicked = true;
    this.items = [];
    this.itemDelivering = [];
    this.itemPending = [];
  }

  ngOnInit(): void {
    this.OrderApiService.getAllOrders().subscribe((data) => {
      this.items = data.orders
      this.itemPending = data.orders.filter((elem) => elem.status === 'pending')
      this.itemDelivering = data.orders.filter((elem) => elem.status === 'delivering')
      console.log('pending', this.itemPending)
      console.log('delivey', this.itemDelivering)
    });
  }
  changeFalse() {
    this.clicked = false
  }
  changeTrue() {
    this.clicked = true
  }
}
