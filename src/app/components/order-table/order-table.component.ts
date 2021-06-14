import {
  Component, OnInit, Input
} from '@angular/core';
import {
  IOrderModel
} from 'src/app/models/orders-model';
import { OrderApiService } from '../../services/order-api.service'
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.sass'
  ]
})
export class OrderTableComponent implements OnInit {
  @Input() item: IOrderModel = {} as IOrderModel;
  constructor(private orderApiService: OrderApiService) { }

  ngOnInit(): void { }

  update(item: any) {
    const date = new Date().toLocaleDateString('es-Es');
    const time = new Date().toLocaleTimeString('es-Es');
    if (item.status === 'pending') {
      const order: IOrderModel = {
        ...item,
        status: 'delivering',
        dateprocesed: `${date} ${time}`
      }
      console.log(order)
      this.orderApiService.updateOrder(item._id, order).pipe(
        catchError((error) => {
          console.log('error', error);
          if (error.status === 400) {
            console.log('error de credenciales');
          }
          return throwError(error);
        })
      ).subscribe((data: any) => {
        console.log('pending', data)
      })
    }
    else if (item.status === 'delivering') {
      const order: IOrderModel = {
      ...item,
        status: 'ready',
        dateprocesed: `${date} ${time}`
      }
      console.log(order)
      this.orderApiService.updateOrder(item._id, order).pipe(
        catchError((error) => {
          console.log('error', error);
          if (error.status === 400) {
            console.log('error de credenciales');
          }
          return throwError(error);
        })
      ).subscribe((data: any) => {
        console.log('delivering', data)
      })
    }

  }
}
