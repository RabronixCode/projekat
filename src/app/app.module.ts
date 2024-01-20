import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserHttpService } from './services/user-http.service';
import { LoginService } from './services/login.service';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemHttpService } from './services/item-http.service';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { ChangePriceComponent } from './change-price/change-price.component';
import { CartComponent } from './cart/cart.component';
import { OffComponent } from './off/off.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ShopComponent,
    AddItemComponent,
    DeleteItemComponent,
    ChangePriceComponent,
    CartComponent,
    OffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    UserHttpService,
    LoginService,
    ItemHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
