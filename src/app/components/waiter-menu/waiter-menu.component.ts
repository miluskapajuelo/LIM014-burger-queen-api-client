import { Component, OnInit } from '@angular/core';
import { ProductDetailModel, IProductsModel } from 'src/app/models/products-model';
import { IOrderModel, OrderProductModel } from 'src/app/models/orders-model';
import { ProductsApiService } from 'src/app/services/products-api.service';


@Component({
  selector: 'app-waiterMenu',
  templateUrl: './waiter-menu.component.html',
  styleUrls: ['./waiter-menu.component.sass']
})
export class WaiterMenuComponent implements OnInit {

  items:Array<ProductDetailModel>
  productitem: Array<OrderProductModel>
  dishCategories = new Set()
  products: Array<ProductDetailModel>
  total: number = 0
/*   array:number[] */



  constructor(private productsApiService: ProductsApiService) {
    this.productitem = []
    this.items=[]
    this.products = []
 /*    this.array=[] */
  }

  ngOnInit(): void {
    this.productsApiService.getAllProducts()
      .subscribe((products: any) => {
        this.items=products.products
        this.filter(this.items)
        this.filterType('burger')

      })
      this.getTotal()
  }

  //3 categories
  filter(elem: Array<ProductDetailModel>) {
    elem.forEach((element: ProductDetailModel) => {
      this.dishCategories.add(element.type)
    });

  }


  //get object to menu order
  getProduct(item: ProductDetailModel): void {
    let model:OrderProductModel = {
      qty: 1,
      product: {
        name: item.name,
        id: item._id
      }
    }

    if(this.productitem){
      let item2 = this.productitem.find(productoPedido => {
        return item._id === productoPedido.product.id})
      if(item2 === undefined){
        this.productitem.push(model)
        /* model.qty++ */
      }
    }
    else{
      console.log('hola')

  }
  this.getTotal()

  }



  //filter by category
  filterType(category: any) {
    this.products = this.items.filter((elem: ProductDetailModel) => {
      return elem.type === category;
    })
  }

  //add +1 in quantity product
  addItem(item: OrderProductModel) {
    this.productitem = this.productitem.map((elem) => {
      if (elem.product.id === item.product.id) {
        elem.qty++
      }
      return elem;
    }
    )
    this.getTotal()
  }

 //add +1 in quantity product
  removeItem(item: OrderProductModel) {
    this.productitem.forEach((elem) => {
      if (elem.product.id === item.product.id && elem.qty > 1) {
        elem.qty--
      } else if (elem.product.id === item.product.id && elem.qty <= 1) {
        let index = this.productitem.indexOf(item)
        this.productitem.splice(index, 1)
      }
    })
    this.getTotal()
  }

  //delete product in order menu
  deleteItem(item: OrderProductModel) {
    let index = this.productitem.indexOf(item)
    this.productitem.splice(index, 1)
    this.getTotal()
  }

  getTotal(){
    this.total = this.productitem
    .map(item => item.qty*10)
    .reduce((acc, item)=>acc+= item, 0)
}


}
