import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class RoutersService {

  constructor(private router:Router) { }

  toHome(username:string){
    this.router.navigate(['dashboard',{
      "username":username
    }],{
      queryParams:{
        "loginTime":new Date().toTimeString()
      }
    })
  }

  toLogin(){
    this.router.navigate(['login'])
  }
}
