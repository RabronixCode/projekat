import { Component, OnInit } from '@angular/core';
import { User } from '../model/userModel';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserHttpService } from '../services/user-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  users!: User[];

  sameUsername = false;
  sameEmail = false;
  
  registerForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl("", [Validators.required, Validators.email, Validators.pattern(".*\.com")]),
    username: new FormControl("", [Validators.required, Validators.minLength(3)]),
    password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}:;<>,.?~\\/-]).{8,}$")]),
    age: new FormControl("", [Validators.required, Validators.min(12), Validators.max(99)])
  });

  constructor(private router: Router, private registerHttp: UserHttpService){

  }

  register(){

    const nameValue = this.registerForm.value.name;
    const emailValue = this.registerForm.value.email;
    const usernameValue = this.registerForm.value.username;
    const passwordValue = this.registerForm.value.password;
    const ageValue = Number(this.registerForm.value.age);

    console.log(nameValue + " " + emailValue);

    const lastId = this.users.pop();
    console.log(lastId);

    if (this.users.some(user => user.username === nameValue)){
      this.sameUsername = true;
    }else if (this.users.some(user => user.email === emailValue)){
      this.sameEmail = true;
    }else{
      this.registerHttp.addUser(new User(lastId!.id + 1, nameValue!, emailValue!, usernameValue!, passwordValue!, ageValue!)).subscribe(newUser => this.users.push(newUser));
    }
    alert("Uspesno ste se registrovali!");
    this.router.navigate(['/login']);


  }



  ngOnInit(): void {
    this.registerHttp.getUsers().subscribe((users) => {
      this.users = users;
    });
  }



}
