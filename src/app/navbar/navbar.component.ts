import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Subscription } from 'rxjs';
import { CartComponent } from '../cart/cart.component';
import { SharedServiceService } from '../services/shared-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  loggedInUser = false;
  loggedInAdmin = false;
  loggedIn = "";

  subscription!: Subscription;
  subscriptionUsername: Subscription;

  constructor(private loginService: LoginService, private ss: SharedServiceService){
    this.subscriptionUsername = this.loginService.loggedInUser$.subscribe((value: any) => {
      this.loggedIn = value;
      console.log(this.loggedIn);
      if (this.loggedIn != "admin"){
        this.subscription = this.loginService.loggedIn$.subscribe((value: any) => {
          this.loggedInAdmin = false;
          this.loggedInUser = value;
        });
      }else {
        this.subscription = this.loginService.loggedIn$.subscribe((value: any) => {
          this.loggedInUser = false;
          this.loggedInAdmin = value;
        });
      }
    });
    
    
  }

  logout(){
    this.loggedInAdmin = false;
    this.loggedInUser = false;
    this.ss.logout();
  }
}


