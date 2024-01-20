import { Injectable } from '@angular/core';
import { Item } from '../model/itemModel';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  private cart!: Item[];

  constructor() {
    this.cart = [];
  }

  addItem(item: Item){
    this.cart.push(item);
    console.log(this.cart.length);
  }

  getCart(){
    return this.cart;
  }

  add(c: any){
    const index = this.cart.findIndex(item => item.name === c.name);

    if (index !== -1) {
      // Use the spread operator to create a shallow copy of the array
      const duplicatedItem = { ...this.cart[index] };
      
      // Duplicate the item by pushing a copy into the array
      this.cart.push(duplicatedItem);
    }
    
  }

  subtract(c: any){
    console.log(this.cart.length);
    for(let i=0; i<this.cart.length; i++){
      if (c.name == this.cart[i].name){
        this.cart.splice(i, 1);
        break;
      }
    }
    console.log(this.cart.length);
  }

  delete(c: any){
    this.cart = this.cart.filter(cartItem => cartItem.name !== c.name);
  }

  logout(){
    this.cart = [];
  }
}
