import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProductsModel, ProductDetailModel } from 'src/app/models/products-model';

@Component({
  selector: 'app-order-dish',
  templateUrl: './order-dish.component.html',
  styleUrls: ['./order-dish.component.sass']
})
export class OrderDishComponent implements OnInit {


  @Input()selectProduct:Array<ProductDetailModel>=[];
  @Output() deleteItem: EventEmitter<ProductDetailModel> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  deleteProduct(item:ProductDetailModel){
    this.deleteItem.emit(item)

  }

}
