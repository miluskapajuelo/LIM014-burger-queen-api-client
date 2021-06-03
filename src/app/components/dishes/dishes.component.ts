import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from 'src/app/services/products-api.service';
import { ProductsInterface } from '../../models/products-interface'


@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.sass']
})
export class DishesComponent implements OnInit {

  dataDishes: any;

  constructor(private productsApiService: ProductsApiService) { }

  ngOnInit() {
    this.showCategories();

  }

  showCategories() {
    this.productsApiService.getAllProducts()
      .subscribe((data: any) => {

        this.dataDishes =  data.products
        console.log("hola", this.dataDishes)

        /* const token = window.localStorage.getItem('token');
        console.log('objeto decode', jwt_decode(data.resp.token));
        console.log('token',token) */

      });}

}
