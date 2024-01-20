import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedInSubject = new Subject<boolean>();
  private loggedInUsername = new Subject<string>();

  loggedIn$ = this.loggedInSubject.asObservable();
  loggedInUser$ = this.loggedInUsername.asObservable();

  setVariableValue(value: boolean, username: string) {
    this.loggedInUsername.next(username);
    this.loggedInSubject.next(value);
  }

  constructor() {

  }
}
