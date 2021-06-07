import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProductsModel, ProductDetailModel } from 'src/app/models/products-model';

@Component({
  selector: 'app-order-dish',
  templateUrl: './order-dish.component.html',
  styleUrls: ['./order-dish.component.sass']
})
export class OrderDishComponent implements OnInit {


  @Input()selectProduct:Array<ProductDetailModel>=[];

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(item:ProductDetailModel){
    this.selectProduct = this.selectProduct.filter(x=>x._id !== item._id )
  }

}
