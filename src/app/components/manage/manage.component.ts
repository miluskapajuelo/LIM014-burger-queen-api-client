import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductDetailModel } from 'src/app/models/products-model';
import { UserDetailModel } from 'src/app/models/user-model';
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
  currentUser: any;
  currentProduct: any;

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
    this.productsApiService.getAllProducts().pipe(
      catchError((error) => {
        if (error) {
          alert('Opss something is wrong, try again!');
        }
        return throwError(error);
      })
    ).subscribe((data: any) => {
      this.products = data
    })
  }
  getUsers() {
    this.userApiService.getAllUsers().pipe(
      catchError((error) => {
        if (error) {
          alert('Opss something is wrong, try again!');
        }
        return throwError(error);
      })
    ).subscribe((data: any) => {
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
    this.productsApiService.deleteProducts(product._id).pipe(
      catchError((error) => {
        if (error) {
          alert('Opss something is wrong, try again!');
        }
        return throwError(error);
      })
    ).subscribe(() => this.getProducts())
    this.getProducts()
  }
  deleteUserById(user: UserDetailModel) {
    this.userApiService.deleteUser(user._id).pipe(
      catchError((error) => {
        if (error) {
          alert('Opss something is wrong, try again!');
        }
        return throwError(error);
      })
    ).subscribe(() => this.getUsers())
    this.getUsers()
  }

  closeModalProduct() {
    this.activeProducts = false
  }

  closeModalUser() {
    this.activeUser = false
  }

  openModalProducts(product: any) {
    if (product.name === '') {
      this.activeProducts = true
      this.create = true

    }
    else {
      this.activeProducts = true
      this.create = false
      this.currentProduct = product;
    }
  }

  openModalUser(user: any) {
    if (user.name === '') {
      this.activeUser = true
      this.create = true

    }
    else {
      this.activeUser = true
      this.create = false
      this.currentUser = user;
    }
  }
  createtProduct(product: any) {
    let productDetail = {
      name: product.product,
      price: product.Price,
      type: product.Type,
      image: product.image
    }
    if (this.create === false) {
      this.activeProducts = true
      this.productsApiService.updateProducts(this.currentProduct._id, productDetail).pipe(
        catchError((error) => {
          if (error) {
            alert('Opss something is wrong, try again!');
          }
          return throwError(error);
        })
      ).subscribe(() => {
        this.getProducts()
        this.currentProduct = ''
      });
    }
    else {
      this.activeProducts = true
      this.productsApiService.createProducts(productDetail).pipe(
        catchError((error) => {
          if (error) {
            alert('Opss something is wrong, try again!');
          }
          return throwError(error);
        })
      ).subscribe(() => this.getProducts());
    }
  }


  createUser(user: any) {
    let userDetail = {
      email: user.email,
      password: user.password,
      roles: {
        admin: user.rol === 'yes' ? true : false
      }
    }
    if (this.create === false) {
      this.activeUser = true
      this.userApiService.updateUser(this.currentUser._id, userDetail).pipe(
        catchError((error) => {
          if (error) {
            alert('Opss something is wrong, try again!');
          }
          return throwError(error);
        })
      ).subscribe(() => {
        this.getUsers()
        this.currentUser = ''
      });
    }
    else {
      this.activeUser = true
      this.userApiService.createUser(userDetail).pipe(
        catchError((error) => {
          if (error) {
            alert('Opss something is wrong, try again!');
          }
          return throwError(error);
        })
      ).subscribe(() => this.getUsers());
    }
  }



}
