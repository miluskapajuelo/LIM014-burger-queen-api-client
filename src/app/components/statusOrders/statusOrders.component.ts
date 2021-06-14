import {
  Component, OnInit
} from '@angular/core';
import dayjs from 'dayjs';
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
      console.log('pending ordered', this.itemPending.sort((a:IOrderModel, b:IOrderModel) => {
        let formatA:any = dayjs(a.dateEntry).format('HHmmss')
        let formatB:any = dayjs(b.dateEntry).format('HHmmss')
        return formatA - formatB;
    }))
    console.log('delivering ordered', this.itemDelivering.sort((a:IOrderModel, b:IOrderModel) => {
      let formatA:any = dayjs(a.dateEntry).format('HHmmss')
      let formatB:any = dayjs(b.dateEntry).format('HHmmss')
      return formatB - formatA;

  }))
    });
  }
  changeFalse() {
    this.clicked = false
  }
  changeTrue() {
    this.clicked = true
  }
}
