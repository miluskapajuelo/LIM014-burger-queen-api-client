import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductDetailModel } from 'src/app/models/products-model';
import { OrderProductModel } from 'src/app/models/orders-model';

@Component({
  selector: 'app-order-dish',
  templateUrl: './order-dish.component.html',
  styleUrls: ['./order-dish.component.sass']
})
export class OrderDishComponent implements OnInit {

  @Input() total:number = 0;
  @Input() productitem:any
  @Output() deleteItem: EventEmitter<OrderProductModel> = new EventEmitter()
  @Output() addItem: EventEmitter<OrderProductModel> = new EventEmitter()
  @Output() removeItem: EventEmitter<OrderProductModel> = new EventEmitter()
  @Output() getPrices: EventEmitter<string> = new EventEmitter()
  @Output() newOrder: EventEmitter<any> = new EventEmitter()






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
  newOrderProduct(item: any){
    this.newOrder.emit(item)

  }
}
