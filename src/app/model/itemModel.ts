export class Item{

    id: number;
    name: string;
    description: string;
    price: number;
    off: number;

    constructor(id: number, name: string, description: string, price: number, off = 0){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.off = off;
    }

}