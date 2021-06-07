import { Component, OnInit } from '@angular/core';
import { ProductDetailModel, IProductsModel } from 'src/app/models/products-model';
import { ProductsApiService } from 'src/app/services/products-api.service';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.sass']
})
export class WaiterComponent implements OnInit {

  items: IProductsModel[]=[]
  selectProduct: Array<ProductDetailModel>=[]

  constructor(private productsApiService:ProductsApiService) { }

  ngOnInit(): void {
    this.productsApiService.getAllProducts().subscribe(data =>{
      this.items = data
 })

  }

  getProduct(item:any){
    //if(item._id) validar si está incluido en el array
    this.selectProduct.push(item)
    /* this.items = this.items.filter(x=>x !== item ) */

    console.log(this.selectProduct)
    //this.itemService.deleteItem(item).subscribe()
  }
  }
