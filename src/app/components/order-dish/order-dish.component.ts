import { Component, OnInit, Input } from '@angular/core';
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
    console.log(this.selectProduct)
  }


}
