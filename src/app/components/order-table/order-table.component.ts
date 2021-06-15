import {
  Component, OnInit, Input
} from '@angular/core';
import {
  IOrderModel
} from 'src/app/models/orders-model';
import { OrderApiService } from '../../services/order-api.service'
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import dayjs from 'dayjs';


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
    const dateProcesed = dayjs();
    if (item.status === 'pending') {
      const order: IOrderModel = {
        ...item,
        status: 'delivering',
        dateProcesed: dateProcesed.format('YYYY-MM-DD HH:mm:ss')
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
        console.log('pending')
      })
    }
    else if (item.status === 'delivering') {
      const order: IOrderModel = {
        ...item,
        status: 'ready',
        dateProcesed: dateProcesed.format('YYYY-MM-DD HH:mm:ss')
      }
      this.orderApiService.updateOrder(item._id, order).pipe(
        catchError((error) => {
          console.log('error', error);
          if (error.status === 400) {
            console.log('error de credenciales');
          }
          return throwError(error);
        })
      ).subscribe((data: any) => {
        console.log('delivering')
      })
    }

  }
  calculateTime(dateEntry: string, dateProcesed: string) {
    const dateOld = dayjs(dateEntry)
    const dateNow = dayjs(dateProcesed)
    const minutes = dateNow.diff(dateOld, 'm')
    const hours = dateNow.diff(dateOld, 'h')
    return `${hours >= 1 ? `${hours}:${minutes-60*hours} min`: `${minutes} min`}`
  }
}
