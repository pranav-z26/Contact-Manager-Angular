import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class RoutersService {

  constructor(private router:Router) { }

  toHome(){
    this.router.navigate(['dashboard'])
  }

  toLogin(){
    this.router.navigate(['login'])
  }
}
