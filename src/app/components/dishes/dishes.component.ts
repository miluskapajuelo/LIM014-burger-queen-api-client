import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { ProductDetailModel } from 'src/app/models/products-model';


@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.sass']
})
export class DishesComponent implements OnInit {


  @Input() items: Array<ProductDetailModel>
  @Input() products: Array<ProductDetailModel>
  @Input() dishCategories = new Set()
  @Output() getProduct: EventEmitter<ProductDetailModel> = new EventEmitter()
  @Output() filterType: EventEmitter<ProductDetailModel> = new EventEmitter()

  ngOnInit(): void {
    this.items = []
  }

  constructor() {

  }

  GetProduct(item: ProductDetailModel) {
    this.getProduct.emit(item)
  }

  filterbyCateg(Category:any){
    this.filterType.emit(Category)
  }


}
