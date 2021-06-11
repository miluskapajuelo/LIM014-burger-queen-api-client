import { Component, OnInit } from '@angular/core';
import { ProductDetailModel, IProductsModel } from 'src/app/models/products-model';
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


  constructor(private productsApiService: ProductsApiService, private orderApiService: OrderApiService) {
    this.productitem = []
    this.items = []
    this.products = []
    this.total = 0;
    /*    this.array=[] */
  }

  ngOnInit(): void {
    this.productsApiService.getAllProducts()
      .subscribe((products: any) => {
        this.items = products.products
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
    let model = {
      qty: 1,
      product: {
        name: item.name,
        id: item._id,
        price: item.price
      }
    }
    if (this.productitem) {
      let item2 = this.productitem.find(product => {
        return item._id === product.product.id
      })
      if (item2 === undefined) {
        this.productitem.push(model)
      }
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

  getTotal() {
    this.total = this.productitem
      .map(item => item.qty * item.product.price)
      .reduce((acc, item) => acc += item, 0)
  }
  newOrder() {
    console.log('entrando')
    const date = new Date().toLocaleDateString('es-Es');
    const time = new Date().toLocaleTimeString('es-Es');
    const token = localStorage.getItem('token')
    const user: any = jwt_decode(token);
    console.log(user)
    const client = 'client';
      let order: IOrderModel = {
        _id: '001',
        userId: user.id,
        client: 'name',
        products: this.productitem,
        status: 'pending',
        dateEntry: `${date} ${time}`,
        dateProcesed: 'string'
      }
      this.orderApiService.createOrder(order).pipe(
        catchError((error) => {
          console.log('error', error);
          if (error.status === 400) {
            console.log('error de credenciales');
          }
          return throwError(error);
        })
      ).subscribe((data: any) => console.log(data))
    }

  }

