import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/userModel';
import { UserHttpService } from '../services/user-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  users!: User[];
  wrong = false;

  constructor(private router: Router, private loginService: LoginService, private loginHttp: UserHttpService){
    
  }
  

  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });

  get username(){
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('password');
  }
  

  login() {
    const usernameValue = this.loginForm.value.username;
    const passwordValue = this.loginForm.value.password;
    
    if (this.users.some(user => user.username === usernameValue?.toString() && user.password === passwordValue?.toString())){
      this.loginService.setVariableValue(true, usernameValue!);
      this.router.navigate(['/']);
    }else{
      this.wrong = true;
    }
    
    setTimeout(() => {
      
    }, 3000);

    return false;
  }


  ngOnInit(): void {
    this.loginHttp.getUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users);

    });
  }

}
