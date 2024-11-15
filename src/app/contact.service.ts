import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  IContactModl, IContactReqObj } from './app.component';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})

export class ContactService {
  url = environment.apiUrl;
  constructor(private httpclient: HttpClient) { }
  GetList(): Observable<IContactModl[]> {
    return this.httpclient.get<IContactModl[]>(this.url + 'getAllContact');
  }
  Create(obj: IContactReqObj) {
    return this.httpclient.post<IContactModl[]>(this.url + 'Create', obj);
  }
  Modify(id: number, obj: IContactReqObj) {
    return this.httpclient.put<IContactModl[]>(this.url + 'Modify/' + id, obj);
  }
  Delete(ID: number): Observable<IContactModl[]> {
    return this.httpclient.delete<IContactModl[]>(this.url + 'DeleteContact/' + ID);
  }
}
