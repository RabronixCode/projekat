import { Component, OnInit } from '@angular/core';
import { Item } from '../model/itemModel';
import { ItemHttpService } from '../services/item-http.service';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrl: './delete-item.component.css'
})
export class DeleteItemComponent implements OnInit{

  items!: Item[];

  constructor(private itemHttp: ItemHttpService){

  }

  deleteItem(item: Item){
    this.itemHttp.deleteItem(item.id).subscribe((item) => this.items.splice(item.id, 1));
  }

  ngOnInit(): void {
    this.itemHttp.getItems().subscribe((items) => {
      this.items = items;
    });
  }

}
