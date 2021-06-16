import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductDetailModel } from 'src/app/models/products-model';

@Component({
  selector: 'app-manage-products-table',
  templateUrl: './manage-products-table.component.html',
  styleUrls: ['./manage-products-table.component.sass']
})
export class ManageProductsTableComponent implements OnInit {

  @Input() products: Array<ProductDetailModel> = []
  @Output() deleteProductById: EventEmitter<any> = new EventEmitter()
  @Output() updatePorductById: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  deleteProduct(product:any){
    this.deleteProductById.emit(product)
  }
  updatePorduct(product:any){
    this.updatePorductById.emit(product)
  }

}
