import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cmanagerm } from '../models/cmanager/cmanager.module';


@Injectable({
  providedIn: 'root'
})
export class CmanagerService {

  constructor(private httpClient:HttpClient) { }

  getContact():Observable<Array<Cmanagerm>>{
    return this.httpClient.get<Array<Cmanagerm>>("http://localhost:3000/contacts")
  }
  addContact(contact:Cmanagerm){
    return this.httpClient.post<Cmanagerm>("http://localhost:3000/contacts",contact)
  }
  deleteContact(contact:Cmanagerm){
    console.log("Delete contact",contact);
}
}
