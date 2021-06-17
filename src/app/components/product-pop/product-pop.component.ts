import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsApiService } from 'src/app/services/products-api.service';

@Component({
  selector: 'app-product-pop',
  templateUrl: './product-pop.component.html',
  styleUrls: ['./product-pop.component.sass']
})
export class ProductPopComponent implements OnInit {
  @Output() closeModal: EventEmitter<any> = new EventEmitter()
  constructor(private productsApiService:ProductsApiService) { }

  ngOnInit(): void {
  }

  savenew(product:any, price:any, type:any){
    const productNew = { name: product.value, price:price.value, type:type.value}
    this.productsApiService.createProducts(productNew).subscribe(product => console.log(product ));
  }
  closeModalProduct() {
    this.closeModal.emit()
  }
}
