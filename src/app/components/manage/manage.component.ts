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
  create:boolean = false
  clicked: boolean;
  products: Array<ProductDetailModel>
  users: Array<UserDetailModel>
  activeProducts:boolean

  constructor(private productsApiService: ProductsApiService, private userApiService: UserApiService) {
    this.clicked = true;
    this.activeProducts= false
  }

  ngOnInit(): void {
    this.getProducts()
    this.getUsers()
  }
  getProducts() {
    this.productsApiService.getAllProducts().subscribe((data: IProductsModel) => {
      console.log(data)
      this.products = data.products
    })
  }
  getUsers() {
    this.userApiService.getAllUsers().subscribe((data: IUserModel) => {
      this.users = data.user
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
    this.productsApiService.deleteProducts(product._id).subscribe(data => console.log(data))
  }

  closeModal(){
    this.activeProducts =false
  }

  openModal(object:any){
    if(object.name===''){
      console.log('modal para crear')
      this.activeProducts =true
      this.create=true

    }
    else{
      console.log('modal para update')
      this.activeProducts =true
      this.create=false
    }
  }

  createtwoProducts(product:any){
    if(this.create===false){
      console.log('producto actualizado')
      this.activeProducts =true
      let productDetail = { name:product.name, price:product.price, type:product.type, image:product.image}
      this.productsApiService.updateProducts(1,productDetail).subscribe(product => console.log(product));

    }
    else{
      console.log('producto creado')
      this.activeProducts =true
      let productDetail = { name:product.name, price:product.price, type:product.type, image:product.image}
      this.productsApiService.createProducts(productDetail).subscribe(product => console.log(product));
    }
  }

}
