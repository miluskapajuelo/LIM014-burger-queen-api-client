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
  index:number=0

  constructor(private productsApiService:ProductsApiService) { }

  ngOnInit(): void {
    this.productsApiService.getAllProducts().subscribe(data =>{
      this.items = data
 })

  }

  getProduct(item:any){
    this.selectProduct.push(item)
  }

  deleteItem(item:ProductDetailModel){
    this.selectProduct = this.selectProduct.filter(x=>x._id !== item._id)
    console.log('hola')
  }
  }
