import { Component, Input } from '@angular/core';
import { Item } from '../model/itemModel';
import { ItemHttpService } from '../services/item-http.service';

@Component({
  selector: 'app-change-price',
  templateUrl: './change-price.component.html',
  styleUrl: './change-price.component.css'
})
export class ChangePriceComponent {

  items!: Item[];
  newPrice!: number;

  constructor(private itemHttp: ItemHttpService){

  }

  changePrice(item: Item, newPrice: HTMLInputElement){
    this.newPrice = Number(newPrice.value);
    item.price = this.newPrice;
    this.itemHttp.updateItem(item).subscribe();
    return false;
  }

  ngOnInit(): void {
    this.itemHttp.getItems().subscribe((items) => {
      this.items = items;
    });
  }

}
