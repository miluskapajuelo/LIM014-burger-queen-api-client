import { DishesComponent } from "./components/dishes/dishes.component";
import { ManageProductsTableComponent } from "./components/manage-products-table/manage-products-table.component";
import { ManageComponent } from "./components/manage/manage.component";
import { ManageUsersTableComponent } from "./components/manageUsers-table/manageUsers-table.component";
import { OrderDishComponent } from "./components/order-dish/order-dish.component";
import { OrderTableComponent } from "./components/order-table/order-table.component";
import { ProductPopComponent } from "./components/product-pop/product-pop.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { StatusOrdersComponent } from "./components/statusOrders/statusOrders.component";
import { UsersPopComponent } from "./components/users-pop/users-pop.component";
import { WaiterMenuComponent } from "./components/waiter-menu/waiter-menu.component";
import { SearchProductPipe } from "./pipes/search-product.pipe";
import { SearchUserPipe } from "./pipes/search-user.pipe";

export const ModuleTesting = [
  WaiterMenuComponent,
  ManageComponent,
  StatusOrdersComponent,
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
]