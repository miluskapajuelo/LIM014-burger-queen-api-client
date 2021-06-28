import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-pop',
  templateUrl: './product-pop.component.html',
  styleUrls: ['./product-pop.component.sass']
})
export class ProductPopComponent implements OnInit {

  @Output() closeModalProduct: EventEmitter<any> = new EventEmitter()
  @Output() createtProduct: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  //close modal
  closeModalProducts() {
    this.closeModalProduct.emit()
  }
  //create product
  createProducts(product:HTMLInputElement, price:HTMLInputElement, type:HTMLInputElement,image:HTMLInputElement){
    const productNew ={ name: product.value,
      price:price.value, type:type.value, image: image.value}
      this.createtProduct.emit(productNew)
    }


}


