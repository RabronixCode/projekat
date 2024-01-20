import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../model/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  private apiUrl = 'http://localhost:3000/users';

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<User[]> { //umesto soba bilo je any
    return this._http.get<any[]>(this.apiUrl).pipe(
      map((data: any[]) => data.map((item: any) =>
        new User(item.id, item.name, item.email, item.username, item.password, item.age))),
    );
  }

  addUser(user: any): Observable<any> {
    return this._http.post<any>(this.apiUrl, user);
  }

  updateUser(user: any): Observable<any> {
    const url = `${this.apiUrl}/${user.id}`;
    return this._http.put<any>(url, user);
  }

  deleteUser(userId: number): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this._http.delete<any>(url);
  }
}
