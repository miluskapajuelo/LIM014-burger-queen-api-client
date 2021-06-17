import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WaiterMenuComponent } from './components/waiter-menu/waiter-menu.component';
import { ManageComponent } from './components/manage/manage.component';
import { StatusOrdersComponent } from './components/statusOrders/statusOrders.component';
import {ActiveSessionGuard} from './guards/active-session.guard'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'manage',
    canActivate: [ActiveSessionGuard],
    component: ManageComponent,
  },
  {
    path: 'waiter',
    canActivate: [ActiveSessionGuard],
    component: WaiterMenuComponent,
  }, {
    path: 'statusOrders',
    canActivate: [ActiveSessionGuard],
    component: StatusOrdersComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
