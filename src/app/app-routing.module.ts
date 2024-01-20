import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';
import { AddItemComponent } from './add-item/add-item.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { ChangePriceComponent } from './change-price/change-price.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'add-item',
    component: AddItemComponent
  },
  {
    path: 'delete-item',
    component: DeleteItemComponent
  },
  {
    path: 'change-price',
    component: ChangePriceComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
