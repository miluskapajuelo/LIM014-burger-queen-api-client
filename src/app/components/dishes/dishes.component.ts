import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsApiService } from 'src/app/services/products-api.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.sass']
})
export class DishesComponent implements OnInit {

  dataDishes: any;
  dataAllDishes: any;
  dishCategories=new Set()
  dishes:any
  categoryValue:any
  filterProducts: any[]= []
  products:any[]=[]
  category:any


  constructor(private productsApiService: ProductsApiService, private route: ActivatedRoute) {
       this.productsApiService.getAllProducts()
        .subscribe((products: any) => {
          this.products = products.products
          //read value of query params
          this.route.queryParamMap.subscribe(params => {
            this.category = params.get('category');
            this.filterProducts = (this.category) ?
            this.products.filter(p=> p.type=== this.category) : this.products;
          })
        });
   }

  ngOnInit() {
    this.showCategories()
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
        this.filter(this.dataDishes)
      });}




  hola(category:any){
      this.categoryValue = category.innerHTML
      if(this.categoryValue ==='burger' ){
        console.log('burger')
      }
      else if(this.categoryValue ==='drink' ){
        console.log('drink')
      }
      else{
        console.log('side dishes')
      }
      }

}
