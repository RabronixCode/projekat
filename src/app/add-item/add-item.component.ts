import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemHttpService } from '../services/item-http.service';
import { Item } from '../model/itemModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent implements OnInit{

  items!: Item[];
  sameName = false;

  constructor(private itemHttp: ItemHttpService, private router: Router){

  }


  addItemForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    price: new FormControl("", [Validators.required, Validators.min(0.1)]),
    off: new FormControl("", [Validators.min(1), Validators.max(99)])
  });

  addItem() {
    const nameValue = this.addItemForm.value.name;
    const descriptionValue = this.addItemForm.value.description;
    const priceValue = Number(this.addItemForm.value.price);
    const offValue = Number(this.addItemForm.value.off);

    const lastId = this.items!.pop();

    if (this.items.some(item => item.name === nameValue)){
      this.sameName = true;
    }else{
      this.itemHttp.addItem(new Item(lastId!.id + 1, nameValue!, descriptionValue!, priceValue!, offValue!)).subscribe(newItem => this.items.push(newItem));
    }
    alert("Uspesno ste dodali proizvod!");

    this.resetInputs();


    return false;
  }

  resetInputs(){
    this.addItemForm.get('name')?.setValue("");
    this.addItemForm.get('description')?.setValue("");
    this.addItemForm.get('price')?.setValue("");
    this.addItemForm.get('off')?.setValue("");
  }

  ngOnInit(): void {
    this.itemHttp.getItems().subscribe((items) => {
      this.items = items;
    });
  }
}
