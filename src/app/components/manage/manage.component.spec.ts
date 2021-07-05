import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  UserApiService
} from '../../services/user-api.service';
import {
  ProductsApiService
} from '../../services/products-api.service';

import { ManageComponent } from './manage.component';
import { UserDetailModel } from 'src/app/models/user-model';
import { ProductDetailModel } from 'src/app/models/products-model';

describe('ManageComponent', () => {
  let component: ManageComponent;
  let fixture: ComponentFixture<ManageComponent>;
  let userApiService: UserApiService;
  let productsApiService: ProductsApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageComponent],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  });

  beforeEach((inject([UserApiService, ProductsApiService], (s: UserApiService, p: ProductsApiService) => {
    userApiService = s;
    productsApiService = p;
    fixture = TestBed.createComponent(ManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })))

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be changeFalse', () => {
    component.changeFalse()
    expect(component.clicked).toBeFalse()
  })
  it('should be changeTrue', () => {
    component.changeTrue()
    expect(component.clicked).toBeTrue()
  })
  it('should be  closeModalProduct', () => {
    component.activeProducts = true;
    component.closeModalProduct()
    expect(component.activeProducts).toBeFalse()
  })
  it('should be  closeModalUser', () => {
    component.activeUser = true;
    component.closeModalUser()
    expect(component.activeUser).toBeFalse()
  })
  it(' should be openModal Products if', () => {
    component.openModalProducts({ name: '' })
    expect(component.create).toBeTrue()
  })
  it(' should be openModal Products else', () => {
    component.openModalProducts({ name: 'mango' })
    expect(component.create).toBeFalse()
  })
  it(' should be openModal user if', () => {
    component.openModalUser({ _id: '', email: '', roles: { admin: false } })
    expect(component.create).toBeTrue()
  })
  it(' should be openModalUser else', () => {
    component.openModalUser({ _id: '', email: 'mango', roles: { admin: false } })
    expect(component.create).toBeFalse()
  })
  it('should be get all user', () => {
    let response: Array<UserDetailModel> = [
      {
        _id: '001',
        email: 'algo@gmail',
        roles: { admin: true }
      }]

    spyOn(userApiService, 'getAllUsers').and.returnValue(of(response))
    component.getUsers()
    fixture.detectChanges();
    fixture.whenStable()
    expect(userApiService.getAllUsers).toHaveBeenCalled()
  })
  it('should be get all Products', () => {
    let response: Array<ProductDetailModel> = [
      {
        _id: '001',
        name: 'agua',
        price: 11,
      }]

    spyOn(productsApiService, 'getAllProducts').and.returnValue(of(response))
    component.getProducts()
    fixture.detectChanges();
    fixture.whenStable()
    expect(productsApiService.getAllProducts).toHaveBeenCalled()
  })
  it('should be get all Products error', () => {
    spyOn(productsApiService, 'getAllProducts').and.returnValue(throwError('error 404'));
    component.getProducts()
    fixture.detectChanges();
    fixture.whenStable()
    expect(productsApiService.getAllProducts).toHaveBeenCalled()
  })
  it('should be get all Users error', () => {

    spyOn(userApiService, 'getAllUsers').and.returnValue(throwError('error 404'))
    component.getUsers()
    fixture.detectChanges();
    fixture.whenStable()
    expect(userApiService.getAllUsers).toHaveBeenCalled()
  })
  it('should be delete User error', () => {
    spyOn(userApiService, 'deleteUser').and.returnValue(throwError('error 404'))
    component.deleteUserById({ _id: '00', email: 'hghg', roles: { admin: false } })
    fixture.detectChanges();
    fixture.whenStable()
    expect(userApiService.deleteUser).toHaveBeenCalled()
  })
  it('should be delete User', () => {
    let response = { _id: '00', email: 'hghg', roles: { admin: false } }
    spyOn(userApiService, 'deleteUser').and.returnValue(of(response))
    component.deleteUserById(response)
    fixture.detectChanges();
    fixture.whenStable()
    expect(userApiService.deleteUser).toHaveBeenCalled()
  })

  it('should be delete Product error', () => {
    spyOn(productsApiService, 'deleteProducts').and.returnValue(throwError('error 404'))
    component.deleteProductById({ _id: '001', name: 'algo', price: 21, type: 'aka' })
    fixture.detectChanges();
    fixture.whenStable()
    expect(productsApiService.deleteProducts).toHaveBeenCalled()
  })
  it('should be delete Product', () => {
    let response = { _id: '001', name: 'algo', price: 21, type: 'aka' }
    spyOn(productsApiService, 'deleteProducts').and.returnValue(of(response))
    component.deleteProductById(response)
    fixture.detectChanges();
    fixture.whenStable()
    expect(productsApiService.deleteProducts).toHaveBeenCalled()
  })
  it('should be create Product if (update)', () => {
    let response = {
      name: 'name',
      price: 22,
      type: 'tipo',
    }
    component.currentProduct = {
      _id: '001',
      name: 'name',
      price: 22,
      type: 'tipo',
    }
    component.create = false;
    spyOn(productsApiService, 'updateProducts').and.returnValue(of(response))
    component.createtProduct(response)
    fixture.detectChanges();
    fixture.whenStable()
    expect(productsApiService.updateProducts).toHaveBeenCalled()
  })
  it('should be create Product if (update) error', () => {
    let product = {
      product: 'name',
      Price: 22,
      Type: 'tipo',
    }
    component.currentProduct = {
      _id: '001',
      name: 'name',
      price: 22,
      type: 'tipo',
    }

    component.create = false;
    spyOn(productsApiService, 'updateProducts').and.returnValue(throwError('error'))
    component.createtProduct(product)
    fixture.detectChanges();
    fixture.whenStable()
    expect(productsApiService.updateProducts).toHaveBeenCalled()
  })
  it('should be create Product else', () => {
    let response = {
      _id: '12',
      name: 'name',
      price: 22,
      type: 'tipo',
    }
    component.create = true;
    spyOn(productsApiService, 'createProducts').and.returnValue(of(response))
    component.createtProduct(response)
    fixture.detectChanges();
    fixture.whenStable()
    expect(productsApiService.createProducts).toHaveBeenCalled()
  })

  it('should be create Product else error', () => {
    let response = {
      name: 'name',
      price: 22,
      type: 'tipo',
    }
    component.create = true;
    spyOn(productsApiService, 'createProducts').and.returnValue(throwError('error'))
    component.createtProduct(response)
    fixture.detectChanges();
    fixture.whenStable()
    expect(productsApiService.createProducts).toHaveBeenCalled()
  })


  it('should be create User if (update)', () => {
    let response = {
      _id: '001',
      email: 'name',
      roles: {
        admin: false,
      }
    }
    let user = {
      email: 'name',
      password: '123',
      rol: 'yes',
    }
    component.currentUser = {
      _id: '001',
      email: 'name',
      roles: {
        admin: false,
      }
    }
    component.create = false;
    spyOn(userApiService, 'updateUser').and.returnValue(of(response))
    component.createUser(user)
    fixture.detectChanges();
    fixture.whenStable()
    expect(userApiService.updateUser).toHaveBeenCalled()
  })
  it('should be create user if (update) error', () => {
    let user = {
      email: 'name',
      password: '123',
      rol: 'yes',
    }
    component.currentUser = {
      _id: '001',
      email: 'name',
      roles: {
        admin: false,
      }
    }

    component.create = false;
    spyOn(userApiService, 'updateUser').and.returnValue(throwError('error'))
    component.createUser(user)
    fixture.detectChanges();
    fixture.whenStable()
    expect(userApiService.updateUser).toHaveBeenCalled()
  })
  it('should be create user else', () => {
    let response = {
      _id: '001',
      email: 'name',
      roles: {
        admin: false,
      }
    }
    let user = {
      email: 'name',
      password: '123',
      rol: 'yes',
    }
    component.create = true;
    spyOn(userApiService, 'createUser').and.returnValue(of(response))
    component.createUser(user)
    fixture.detectChanges();
    fixture.whenStable()
    expect(userApiService.createUser).toHaveBeenCalled()
  })

  it('should be create Product else error', () => {
    let user = {
      email: 'name',
      password: '123',
      rol: 'yes',
    }
    component.create = true;
    spyOn(userApiService, 'createUser').and.returnValue(throwError('error'))
    component.createUser(user)
    fixture.detectChanges();
    fixture.whenStable()
    expect(userApiService.createUser).toHaveBeenCalled()
  })
});
