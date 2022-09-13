import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usersm } from '../models/user/user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<Array<Usersm>> {
    return this.httpClient.get<Array<Usersm>>("http://localhost:3000/Users")
  }
  addUsers(user: Usersm) {
    return this.httpClient.post<Usersm>("http://localhost:3000/Users", user)
  }
}
