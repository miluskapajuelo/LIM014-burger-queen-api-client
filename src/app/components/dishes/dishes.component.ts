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
/*   @Output() showCategoriesProduct: EventEmitter<ProductDetailModel> = new EventEmitter() */
  dataDishes: Array<ProductDetailModel>=[];
  dataAllDishes: any;
  dishCategories=new Set()
  filterProducts: any[]= []
  data:any[]=[]
  category:any
  products:Array<ProductDetailModel>=[];

  ngOnInit(): void {

    this.productsApiService.getAllProducts()
    .subscribe((products:any) => {
      console.log('products',products)
      this.data = products.products
      this.route.queryParamMap.subscribe(params => {
        this.category = params.get('category');
        this.filterProducts = (this.category) ? this.data.filter(p=> p.type=== this.category) : this.data;
      })
      this.filter()
    });

  }

  constructor(private productsApiService: ProductsApiService, private route: ActivatedRoute) {
}

  filter() {
    this.dataDishes = this.data
    this.dataDishes.forEach((element:ProductDetailModel) => {this.dishCategories.add(element.type)});
    }

  GetProduct(item:ProductDetailModel){
    this.getProduct.emit(item)
  }


}
