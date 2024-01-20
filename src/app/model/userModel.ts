export class User {

    id: number;
    name: string;
    email: string;
    username: string;
    password: string;
    age: number;

    constructor(id:number, name: string, email: string, username: string, password: string, age: number){
        this.id = id;
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
        this.age = age;
    }

}