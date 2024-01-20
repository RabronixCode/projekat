import { Component, OnInit } from '@angular/core';
import { Item } from '../model/itemModel';
import { ItemHttpService } from '../services/item-http.service';
import { SharedServiceService } from '../services/shared-service.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit{


  items!: Item[];

  constructor(private itemHttp: ItemHttpService, private sharedService: SharedServiceService){
  }

  addToCart(item: Item) {
    this.sharedService.addItem(item);
  }

  ngOnInit(): void {
    this.itemHttp.getItems().subscribe((items) => {
      this.items = items;
    });
  }

}
