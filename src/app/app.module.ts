import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WaiterMenuComponent } from './components/waiter-menu/waiter-menu.component';
import { ManageComponent } from './components/manage/manage.component';
import { StatusOrdersComponent } from './components/statusOrders/statusOrders.component';
import { LoginComponent } from './components/login/login.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DishesComponent } from './components/dishes/dishes.component'


import { TokenInterceptor } from './interceptors/token.interceptor';
import { OrderDishComponent } from './components/order-dish/order-dish.component';

import { OrderTableComponent } from './components/order-table/order-table.component';
import { ManageUsersTableComponent } from './components/manageUsers-table/manageUsers-table.component';
import { ManageProductsTableComponent } from './components/manage-products-table/manage-products-table.component';
import { SharedModule } from './components/shared/shared.module';
import { ProductPopComponent } from './components/product-pop/product-pop.component';
import { UsersPopComponent } from './components/users-pop/users-pop.component';
import { SearchProductPipe } from './pipes/search-product.pipe';
import { SearchUserPipe } from './pipes/search-user.pipe';
import { ReactiveFormsModule } from '@angular/forms';



// services
@NgModule({
  declarations: [
    AppComponent,
    WaiterMenuComponent,
    ManageComponent,
    StatusOrdersComponent,
    LoginComponent,
    DishesComponent,
    SideNavComponent,
    DishesComponent,
    OrderDishComponent,
    OrderTableComponent,
    ManageUsersTableComponent,
    ManageProductsTableComponent,
    ProductPopComponent,
    UsersPopComponent,
    SearchProductPipe,
    SearchUserPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule

  ],
  exports: [
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
