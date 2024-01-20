import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Item } from '../model/itemModel';

@Injectable({
  providedIn: 'root'
})
export class ItemHttpService {

  private apiUrl = 'http://localhost:3000/items';

  constructor(private _http: HttpClient) { }

  getItems(): Observable<Item[]> { //umesto soba bilo je any
    return this._http.get<any[]>(this.apiUrl).pipe(
      map((data: any[]) => data.map((item: any) =>
        new Item(item.id, item.name, item.description, item.price, item.off))),
    );
  }

  addItem(item: any): Observable<any> {
    return this._http.post<any>(this.apiUrl, item);
  }

  updateItem(item: any): Observable<any> {
    const url = `${this.apiUrl}/${item.id}`;
    return this._http.put<any>(url, item);
  }

  deleteItem(itemId: number): Observable<any> {
    const url = `${this.apiUrl}/${itemId}`;
    return this._http.delete<any>(url);
  }
}
