import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-off',
  templateUrl: './off.component.html',
  styleUrl: './off.component.css'
})
export class OffComponent {

  @Input() newTotal = 0;
  @Output() code = new EventEmitter<{flag: boolean, codeValue: number}>();
  offPercent!: number;

  offCodes = [{
    name: "OFF25",
    value: 25
  },
  {
    name: "OFF33",
    value: 33
  }];

  goodCode(offInputString: string){
    for(let i = 0; i < this.offCodes.length; i++){
      if (this.offCodes[i].name == offInputString){
        return true;
      }
    }
    return false;
  }

  sendToCart(offInput: HTMLInputElement){
    let offInputString = offInput.value;
    let b = this.goodCode(offInputString);
    let v = this.findValueByName(offInputString);
    this.offPercent = v;
    this.code.emit({ flag: b, codeValue: v});
  }

  findValueByName(name: string): number {
    for (const code in this.offCodes) {
      if (this.offCodes[code].name === name) {
        return this.offCodes[code].value;
      }
    }
    return 100;
  }

}
