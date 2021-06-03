import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from 'src/app/services/products-api.service';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  dataDishes: any;
  dishCategories=new Set()
  dishes:any

  constructor(private productsApiService: ProductsApiService) { }

  ngOnInit(): void {
    this.showCategories();
  }

  showCategories() {
    this.productsApiService.getAllProducts()
      .subscribe((data: any) => {

        this.dataDishes =  data.products
        console.log("hola", this.dataDishes);

      });}

}
