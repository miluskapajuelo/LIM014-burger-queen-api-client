import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


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
  myForm = new FormGroup({
    product: new FormControl('',Validators.required),
    Price: new FormControl('',Validators.required),
    Type: new FormControl('',Validators.required),
    image: new FormControl('',Validators.required),
  })

  //close modal
  closeModalProducts() {
    this.closeModalProduct.emit()
  }

  //submit form
  onSubmit() {
    const userNew=this.myForm.value;
    this.createtProduct.emit(userNew)
    this.myForm.reset()
    this.closeModalProducts()
    console.log(userNew)
  }
}


