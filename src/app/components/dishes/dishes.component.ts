import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from 'src/app/services/products-api.service';


@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.sass']
})
export class DishesComponent implements OnInit {

  dataDishes: any;
  dishCategories=new Set()
  dishes:any

  constructor(private productsApiService: ProductsApiService) {

   }

  ngOnInit() {
    this.showCategories();

  }

  filter(dataDishes:any) {
    dataDishes.forEach((element:any) => {
      this.dishCategories.add(element.type)
    });
    return this.dishCategories
  }

  showCategories() {
    this.productsApiService.getAllProducts()
      .subscribe((data: any) => {

        this.dataDishes =  data.products
        console.log("hola", this.dataDishes);
        this.dishes = this.filter(this.dataDishes)

      });}
}
