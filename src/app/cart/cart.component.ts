import { Component, OnInit } from '@angular/core';
import { Item } from '../model/itemModel';
import { SharedServiceService } from '../services/shared-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  cart!: Item[];
  cartList!: any[];
  totalPrice = 0;
  off!: string;
  newTotal = 0;

  static login = false;

  constructor(private sharedService: SharedServiceService){

  }

  add(c: any){
    this.sharedService.add(c);
    this.showCart();
    return false;
  }

  subtract(c: any){
    this.sharedService.subtract(c);
    this.showCart();
    return false;
  }

  delete(c: any){
    this.sharedService.delete(c);
    this.showCart();
    return false;
  }

  calculateTotal(){
    for(let i = 0; i < this.cartList.length; i++){
      this.totalPrice += this.cartList[i].wholePrice;
    }
  }

  showCart(){
    this.cart = this.sharedService.getCart();
    this.cartList = [];
    for(let i=0; i<this.cart.length; i++){
      if (this.checkIfContains(this.cartList, this.cart[i].name)){
        continue;
      }else{
        this.cartList.push({
          "name": this.cart[i].name,
          "price": this.cart[i].price,
          "quantity": 0,
          "wholePrice": 0
        });
      }
      let n = 1;
      for(let j=i+1; j<this.cart.length; j++){
        if (this.cart[i].name === this.cart[j].name){
          n+=1;
        }
      }
      this.cartList[this.cartList.length - 1].quantity = n;
      this.cartList[this.cartList.length - 1].wholePrice = this.cartList[this.cartList.length - 1].quantity * this.cartList[this.cartList.length - 1].price;
    }
    this.totalPrice = 0;
    this.calculateTotal();
  }

  ngOnInit(): void {
    this.showCart();
  }

  checkIfContains(cL: any[], name: string){
    for(let i=0; i<cL.length; i++){
      if (cL[i].name === name) return true;
    }
    return false;
  }

  fromOff(eventData: {flag: boolean, codeValue: number}){
    console.log(eventData.flag + "  231312---" + eventData.codeValue);
    if (eventData.flag){
      let n = eventData.codeValue;
      this.newTotal = this.totalPrice - this.totalPrice * n / 100;
      console.log(this.totalPrice + " AAAA" + this.newTotal);
    }else{
      alert("Ne postoji taj kod!");
    }
  }

  refresh() {
    this.sharedService.logout();
  }
  
}
