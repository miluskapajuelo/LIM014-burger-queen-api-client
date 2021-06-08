import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProductsModel, ProductDetailModel } from 'src/app/models/products-model';

@Component({
  selector: 'app-order-dish',
  templateUrl: './order-dish.component.html',
  styleUrls: ['./order-dish.component.sass']
})
export class OrderDishComponent implements OnInit {

  productitem: Array<ProductDetailModel>=[]
  index:number
  producSelected: any

  @Input()selectProduct:Array<ProductDetailModel>=[];
  @Output() deleteItem: EventEmitter<ProductDetailModel> = new EventEmitter()

  constructor() {
    this.index=0
  }

  ngOnInit(): void {

  }

  deleteProduct(item:ProductDetailModel){
    this.deleteItem.emit(item)
  }

  addItem(item:any){
    this.productitem.push(item._id)

    /* this.productitem.forEach(element => {element._id == item._id}) */
  }

  removeItem(item:any){
    this.index=this.productitem.indexOf(item)
    this.productitem.splice(this.index,1)
  }

}
