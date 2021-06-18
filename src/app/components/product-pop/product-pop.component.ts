import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-pop',
  templateUrl: './product-pop.component.html',
  styleUrls: ['./product-pop.component.sass']
})
export class ProductPopComponent implements OnInit {

  @Output() closeModal: EventEmitter<any> = new EventEmitter()
  @Output() createtwoProducts: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  closeModalProduct() {
    this.closeModal.emit()
  }
  createOneProduct(product:any, price:any, type:any,image:any){
    const productNew ={ product: product.value,
      price:price.value, type:type.value, image: image.value}
      this.createtwoProducts.emit(productNew)
    }


}


