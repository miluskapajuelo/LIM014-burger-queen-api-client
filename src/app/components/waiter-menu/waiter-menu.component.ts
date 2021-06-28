import { Component, OnInit } from '@angular/core';
import { ProductDetailModel } from 'src/app/models/products-model';
import { IOrderModel, OrderProductModel } from 'src/app/models/orders-model';
import { ProductsApiService } from 'src/app/services/products-api.service';
import { OrderApiService } from 'src/app/services/order-api.service';
import jwt_decode from 'jwt-decode';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-waiterMenu',
  templateUrl: './waiter-menu.component.html',
  styleUrls: ['./waiter-menu.component.sass']
})
export class WaiterMenuComponent implements OnInit {

  items: Array<ProductDetailModel>
  productitem: Array<OrderProductModel>
  dishCategories = new Set()
  products: Array<ProductDetailModel>
  total: number;
  name: string;
  able: boolean;


  constructor(private productsApiService: ProductsApiService, private orderApiService: OrderApiService) {
    this.productitem = []
    this.items = []
    this.products = []
    this.total = 0;
    this.able = false
  }

  ngOnInit(): void {
    this.getAllProducts()
    this.getTotal()
  }

  getAllProducts() {
    this.productsApiService.getAllProducts()
      .subscribe((products: any) => {
        this.items = products
        this.items.forEach((element: ProductDetailModel) => {
          this.dishCategories.add(element.type)
        });
        this.filterType('burger')

      })
  }

  //get object to menu order
  getProduct(item: ProductDetailModel): void {
    let modelProduct = {
      qty: 1,
      product: {
        name: item.name,
        id: item._id,
        price: item.price
      }
    }
    if (this.productitem) {
      let productSelec = this.productitem.find(product => item._id === product.product.id)
      if (productSelec === undefined) {
        this.productitem.push(modelProduct)
      }
    }
    this.getTotal()

  }

  //filter by category
  filterType(category: any) {
    this.products = this.items.filter((elem: ProductDetailModel) => elem.type === category)
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

  //remove product depends on quantity
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

  //get total price
  getTotal() {
    this.total = this.productitem
      .map(item => item.qty * item.product.price)
      .reduce((acc, item) => acc += item, 0)
    this.able = this.total > 0 ? true : false
  }

  //Create new order
  newOrder(client: any) {
    const token = localStorage.getItem('token')
    const user: any = jwt_decode(token);
    let order: IOrderModel = {
      userId: user.id,
      client: client.value,
      products: this.productitem,
      status: 'pending'
    }
    console.log(order)
    this.orderApiService.createOrder(order).pipe(
      catchError((error) => {
        if (error.status === 400) {
          alert('Opss something is wrong, try again!');
        }
        return throwError(error);
      })
    ).subscribe(() => {
      this.productitem = [];
      client.value = '';
      this.getTotal()
    }
    )
  }

}

