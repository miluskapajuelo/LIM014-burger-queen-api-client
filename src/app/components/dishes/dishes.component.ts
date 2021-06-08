import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProductsModel, ProductDetailModel } from 'src/app/models/products-model';
import { ProductsApiService } from 'src/app/services/products-api.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.sass']
})
export class DishesComponent implements OnInit {

  @Input()items:IProductsModel[]=[]
  @Output() getProduct: EventEmitter<ProductDetailModel> = new EventEmitter()

  dataDishes: any;
  dataAllDishes: any;
  dishCategories=new Set()
  dishes:any
  categoryValue:any
  filterProducts: any[]= []
  data:any[]=[]
  category:any

  ngOnInit(): void {
    this.showCategories()
    console.log(this.items)
  }

  constructor(private productsApiService: ProductsApiService, private route: ActivatedRoute) {
    this.productsApiService.getAllProducts()
    .subscribe((products: any) => {
      this.data = products.products
      //read value of query params
      this.route.queryParamMap.subscribe(params => {
        this.category = params.get('category');
        this.filterProducts = (this.category) ? this.data.filter(p=> p.type=== this.category) : this.data;
      })
    });
}

  changeView(){

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

  GetProduct(item:ProductDetailModel){
    this.getProduct.emit(item)

  }


}
