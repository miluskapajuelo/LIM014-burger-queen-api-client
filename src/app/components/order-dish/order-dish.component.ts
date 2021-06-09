import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductDetailModel } from 'src/app/models/products-model';
import { IOrderModel } from 'src/app/models/orders-model';

@Component({
  selector: 'app-order-dish',
  templateUrl: './order-dish.component.html',
  styleUrls: ['./order-dish.component.sass']
})
export class OrderDishComponent implements OnInit {


  index:number
  producSelected: any

  @Input()selectProduct:Array<ProductDetailModel>=[];
  @Input()productitem:Array<IOrderModel>
  @Input() objet:any
  @Output() deleteItem: EventEmitter<ProductDetailModel> = new EventEmitter()

  constructor() {
    this.index=0
    this.productitem=[]
  }

  ngOnInit(): void {
  }

  deleteProduct(item:ProductDetailModel){
    this.deleteItem.emit(item)
  }

  addItem(item:any){

    this.objet.quantity += 1

   /*  this.productitem.push(this.objet)
    console.log('arrayobje',this.objet) */

    /* this.productitem.forEach(element => {element._id == item._id}) */
  }

  removeItem(item:any){
    this.index=this.productitem.indexOf(item)
    this.productitem.splice(this.index,1)
  }

}
