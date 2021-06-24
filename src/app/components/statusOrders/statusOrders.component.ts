import {
  Component, OnInit
} from '@angular/core';
import dayjs from 'dayjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
    this.itemDelivering = [];
    this.itemPending = [];
  }

  ngOnInit(): void {
    this.getOrders()
  }

  getOrders() {
    this.OrderApiService.getAllOrders().subscribe((data) => {
      this.itemPending = data.orders.filter((elem) => elem.status === 'pending').sort((a: IOrderModel, b: IOrderModel) => {
        let formatA: any = dayjs(a.dateEntry).format('HHmmss')
        let formatB: any = dayjs(b.dateEntry).format('HHmmss')
        return formatA - formatB;
      })
      this.itemDelivering = data.orders.filter((elem) => elem.status === 'delivering').sort((a: IOrderModel, b: IOrderModel) => {
        let formatA: any = dayjs(a.dateEntry).format('HHmmss')
        let formatB: any = dayjs(b.dateEntry).format('HHmmss')
        return formatA - formatB;
      })
    });
  }
  changeFalse() {
    this.clicked = false
  }
  changeTrue() {
    this.clicked = true
  }
  updateOrders(item: any) {
    const dateProcesed = dayjs();
    if (item.status === 'pending') {
      const order: IOrderModel = {
        ...item,
        status: 'delivering',
        dateProcesed: dateProcesed.format('YYYY-MM-DD HH:mm:ss')
      }
      this.OrderApiService.updateOrder(item._id, order).pipe(
        catchError((error) => {
          if (error.status === 400) {
            alert('Opss something is wrong, try again!');
          }
          return throwError(error);
        })
      ).subscribe(() => {
        this.getOrders()
      })
    }
    else if (item.status === 'delivering') {
      const order: IOrderModel = {
        ...item,
        status: 'ready',
        dateProcesed: dateProcesed.format('YYYY-MM-DD HH:mm:ss')
      }
      this.OrderApiService.updateOrder(item._id, order).pipe(
        catchError((error) => {
          if (error.status === 400) {
            alert('Opss something is wrong, try again!');
          }
          return throwError(error);
        })
      ).subscribe(() => {
        this.getOrders()
      })
    }

  }
}
