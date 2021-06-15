import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductDetailModel } from 'src/app/models/products-model';
import { OrderProductModel, IOrderModel } from 'src/app/models/orders-model';

@Component({
  selector: 'app-order-dish',
  templateUrl: './order-dish.component.html',
  styleUrls: ['./order-dish.component.sass']
})
export class OrderDishComponent implements OnInit {

  @Input() total:number = 0;
  @Input() productitem:any
  @Input() able:boolean
  @Output() deleteItem: EventEmitter<OrderProductModel> = new EventEmitter()
  @Output() addItem: EventEmitter<OrderProductModel> = new EventEmitter()
  @Output() removeItem: EventEmitter<OrderProductModel> = new EventEmitter()
  @Output() getPrices: EventEmitter<string> = new EventEmitter()
  @Output() newOrder: EventEmitter<IOrderModel> = new EventEmitter()
  @Output() getName: EventEmitter<any> = new EventEmitter()



  constructor() {
    this.productitem = []
  }

  ngOnInit(): void {

  }

  deleteProduct(item: OrderProductModel) {
    this.deleteItem.emit(item)
  }
  addProduct(item: OrderProductModel) {
    this.addItem.emit(item)
  }
  removeProduct(item: OrderProductModel) {
    this.removeItem.emit(item)
  }
  newOrderProduct(user:any){
    this.newOrder.emit(user)

  }
/*   getNameClient(user:any){
    this.getName.emit(user)
  } */
  changeStyle(button:any){
    button.style.background= 'red'
  }
}
