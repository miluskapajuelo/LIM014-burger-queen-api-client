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
  create: boolean = false
  clicked: boolean;
  products: Array<ProductDetailModel>
  users: Array<UserDetailModel>
  activeProducts: boolean
  activeUser: boolean

  constructor(private productsApiService: ProductsApiService, private userApiService: UserApiService) {
    this.clicked = true;
    this.activeProducts = false;
    this.activeUser = false;

  }

  ngOnInit(): void {
    this.getProducts()
    this.getUsers()
  }
  getProducts() {
    this.productsApiService.getAllProducts().subscribe((data: any) => {
      this.products = data
    })
  }
  getUsers() {
    this.userApiService.getAllUsers().subscribe((data: any) => {
      this.users = data
    })
  }
  changeFalse() {
    this.clicked = false
  }
  changeTrue() {
    this.clicked = true
  }

  deleteProductById(product: ProductDetailModel) {
    this.productsApiService.deleteProducts(product._id).subscribe(() => this.getProducts)
    this.getProducts()
  }
  deleteUserById(user: UserDetailModel) {
    this.userApiService.deleteUser(user).subscribe(() => this.getUsers())
    this.getUsers()
  }

  closeModalProduct() {
    this.activeProducts = false
  }

  closeModalUser() {
    this.activeUser = false
  }

  openModalProducts(object: any) {
    if (object.name === '') {
      this.activeProducts = true
      this.create = true

    }
    else {
      this.activeProducts = true
      this.create = false
    }
  }

  openModalUser(object: any) {
    if (object.name === '') {
      this.activeUser = true
      this.create = true

    }
    else {
      this.activeUser = true
      this.create = false
    }
  }
  createtProduct(product: any) {
    if (this.create === false) {
      this.activeProducts = true
      let productDetail = { name: product.name, price: product.price, type: product.type, image: product.image }
      this.productsApiService.updateProducts(1, productDetail).subscribe(() => this.getProducts);

    }
    else {
      this.activeProducts = true
      let productDetail = { name: product.name, price: product.price, type: product.type, image: product.image }
      this.productsApiService.createProducts(productDetail).subscribe(() => this.getProducts);
    }
  }


  createUser(user: any) {
    if (this.create === false) {
      this.activeUser = true
      let productDetail = { name: user.admin, price: user.email }
      this.userApiService.updateUser(1, productDetail).subscribe(() => this.getUsers());

    }
    else {
      this.activeUser = true
      let productDetail = { name: user.admin, price: user.email }
      this.userApiService.createUser(productDetail).subscribe(() => this.getUsers());
    }
  }



}
