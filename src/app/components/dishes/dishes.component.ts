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

  products: Array<ProductDetailModel>
  @Input() items: Array<ProductDetailModel>
  @Input() dishCategories = new Set()
  @Output() getProduct: EventEmitter<ProductDetailModel> = new EventEmitter()
  /*   @Output() showCategoriesProduct: EventEmitter<ProductDetailModel> = new EventEmitter() */


  ngOnInit(): void {
    this.products = []
    this.items = []
  }

  constructor(private productsApiService: ProductsApiService, private route: ActivatedRoute) {
  }


  GetProduct(item: ProductDetailModel) {
    this.getProduct.emit(item)
  }
  filterType(category: any) {
    this.products = this.items.filter((elem: ProductDetailModel) => {
      return elem.type === category;
    })
    console.log(this.products)
  }

}
