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



  constructor(private productsApiService: ProductsApiService) {
    this.productitem = []
    this.items=[]
  }

  ngOnInit(): void {
    this.productsApiService.getAllProducts()
      .subscribe((products: any) => {
        this.items=products.products
        this.filter(this.items)
        console.log(this.dishCategories)
      })


  }

  filter(elem: Array<ProductDetailModel>) {
    elem.forEach((element: ProductDetailModel) => {
      this.dishCategories.add(element.type)
    });

  }

  getProduct(item: ProductDetailModel): void {
    let model: OrderProductModel = {
      qty: 1,
      product: {
        name: item.name,
        id: item._id
      }
    }
    this.productitem.push(model)
  }

  addItem(item: OrderProductModel) {
    console.log(item);
    this.productitem = this.productitem.map((elem) => {
      if (elem.product.id === item.product.id) {
        elem.qty++
      }
      return elem;
    }
    )
  }

  removeItem(item: OrderProductModel) {
    this.productitem.forEach((elem) => {
      if (elem.product.id === item.product.id && elem.qty > 1) {
        elem.qty--
      } else if (elem.product.id === item.product.id && elem.qty <= 1) {
        let index = this.productitem.indexOf(item)
        this.productitem.splice(index, 1)
      }
    })
  }


  deleteItem(item: OrderProductModel) {
    let index = this.productitem.indexOf(item)
    this.productitem.splice(index, 1)
  }


}
