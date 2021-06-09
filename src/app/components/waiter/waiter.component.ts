import { Component, OnInit } from '@angular/core';
import { ProductDetailModel, IProductsModel } from 'src/app/models/products-model';
import { IAllOrderModel, IOrderModel } from 'src/app/models/orders-model';
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
  objet:{} = {} as IOrderModel
  productitem: Array<IOrderModel>

  constructor(private productsApiService:ProductsApiService) {
    this.productitem=[]
   }

  ngOnInit(): void {
    this.productsApiService.getAllProducts()
    .subscribe((products:any) => {
      this.items = products.products
 })
  }

  getProduct(item:any){
    this.objet = {
      _id: 'idorder',
      userId:'iduser',
      client:'mai',
      products: [{
        status:'pending',
        dateEntry: 11-12-2020,
        dateProcesed: 11-12-2020,
        qty: 0,
        product: {
          name: item.name,
          id:item._id }}]}

    this.productitem.push(this.objet)
    console.log('productitem',this.productitem[0].products)
  }

  deleteItem(item:ProductDetailModel){
    this.selectProduct = this.selectProduct.filter(x=>x._id !== item._id)
  }


  }
