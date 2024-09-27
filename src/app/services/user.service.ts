import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  getUsers(): Observable<any> {
    return this.http.get('https://api.escuelajs.co/api/v1/users');
  }
}
