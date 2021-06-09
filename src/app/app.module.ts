import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


//Angular material
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WaiterMenuComponent } from './components/waiter-menu/waiter-menu.component';
import { AdminComponent } from './components/admin/admin.component';
import { StatusOrdersComponent } from './components/statusOrders/statusOrders.component';
import { LoginComponent } from './components/login/login.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DishesComponent } from './components/dishes/dishes.component'


import { TokenInterceptor } from './interceptors/token.interceptor';
import { OrderDishComponent } from './components/order-dish/order-dish.component';

import { OrderTableComponent } from './components/order-table/order-table.component';



// services
@NgModule({
  declarations: [
    AppComponent,
    WaiterMenuComponent,
    AdminComponent,
    StatusOrdersComponent,
    LoginComponent,
    DishesComponent,
    SideNavComponent,
    DishesComponent,
    OrderDishComponent,
    OrderTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule

  ],
  exports: [
    MatCardModule,
    MatTableModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
