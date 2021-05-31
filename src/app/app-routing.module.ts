import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WaiterComponent } from './waiter/waiter.component';
import { AdminComponent } from './admin/admin.component';
import { ChefComponent } from './chef/chef.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
},
{
  path: 'admin',
  component: AdminComponent,
},
{
  path: 'waiter',
  component: WaiterComponent,
},{
  path: 'chef',
  component: ChefComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
