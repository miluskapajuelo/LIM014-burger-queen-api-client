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
  uniqueItem:Array<ProductDetailModel>=[]
  index:number=0
  dishCategories=new Set()
  uid:[]=[]
  constructor(private productsApiService:ProductsApiService) { }

  ngOnInit(): void {
    this.productsApiService.getAllProducts()
    .subscribe((products:any) => {
      this.items = products.products
 })
  }

  getProduct(item:any){
    this.selectProduct.push(item)
  }

  deleteItem(item:ProductDetailModel){
    this.selectProduct = this.selectProduct.filter(x=>x._id !== item._id)
  }


  }
