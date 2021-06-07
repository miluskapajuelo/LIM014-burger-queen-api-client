import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


//Angular material
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { AdminComponent } from './components/admin/admin.component';
import { ChefComponent } from './components/chef/chef.component';
import { LoginComponent } from './components/login/login.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DishesComponent } from './components/dishes/dishes.component'

//services
import { AuthApiService } from './services/auth-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TokenInterceptor } from './interceptors/token.interceptor';
import { OrderDishComponent } from './components/order-dish/order-dish.component';

//pipes
import { FilterPipe } from './pipe/filter.pipe';



// services
@NgModule({
  declarations: [
    AppComponent,
    WaiterComponent,
    AdminComponent,
    ChefComponent,
    LoginComponent,
    DishesComponent,
    FilterPipe,
    SideNavComponent,
    DishesComponent,
    OrderDishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule

  ],
  exports:[
    MatCardModule,
    MatTableModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
