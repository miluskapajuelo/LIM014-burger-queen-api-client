import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from 'src/app/services/products-api.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-order-menu',
  templateUrl: './order-menu.component.html',
  styleUrls: ['./order-menu.component.sass']
})


export class OrderMenuComponent implements OnInit {

  constructor(private productsApiService: ProductsApiService) { }

  ngOnInit() {
    this.showProducts();
  }

  showProducts() {
    this.productsApiService.getAllProducts()
      .subscribe((data: any) => {
        console.log(data)

        /* const token = window.localStorage.getItem('token');
        console.log('objeto decode', jwt_decode(data.resp.token));
        console.log('token',token) */

      });

  }}
