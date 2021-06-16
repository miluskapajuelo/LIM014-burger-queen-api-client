import { Component, OnInit } from '@angular/core';
import { IProductsModel, ProductDetailModel } from 'src/app/models/products-model';
import { IUserModel, UserDetailModel } from 'src/app/models/user-model';
import { ProductsApiService } from 'src/app/services/products-api.service';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.sass']
})


export class ManageComponent implements OnInit {
  clicked: boolean;
  products: Array<ProductDetailModel>
  users: Array<UserDetailModel>
  constructor(private productsApiService: ProductsApiService, private userApiService: UserApiService) {
    this.clicked = true;
  }

  ngOnInit(): void {
    this.getProducts()
    this.getUsers()
  }
  getProducts() {
    this.productsApiService.getAllProducts().subscribe((data: IProductsModel) => {
      console.log(data)
      this.products = data.products
      console.log('antes',this.products)
    })
  }
  getUsers() {
    this.userApiService.getAllUsers().subscribe((data: IUserModel) => {
      this.users = data.user
      console.log('hola',this.users)
    })

  }
  changeFalse() {
    this.clicked = false
  }
  changeTrue() {
    this.clicked = true
  }

  deleteProductById(product: any){
    this.products = this.products.filter(c => c._id !== product._id)
    this.productsApiService.deleteProducts(product._id).subscribe()
  }

  updatePorductById(product: any) {
      const newProduct: any = {
        name: 'cheescake',
        price: 18,
        type: 'side dishes'
      }

  }
}
