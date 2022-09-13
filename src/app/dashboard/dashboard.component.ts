import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cmanagerm } from '../models/cmanager/cmanager.module';
import { CmanagerService } from '../service/cmanager.service';
import { RoutersService } from '../service/routers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  carray: Array<Cmanagerm> = [];
  loggedInTime:string = "";
  loggedInUser:string | null= "; "
  constructor(private CmanagerService: CmanagerService, private activeRoute:ActivatedRoute, private routerService:RoutersService) {
    this.CmanagerService.getContact().subscribe(data => this.carray = [...data])
  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(param => {this.loggedInUser = param['username']})
    this.activeRoute.queryParams.subscribe(param => {this.loggedInTime = param['loginTime']})

    // console.log("login name = ", this.loggedInUser)
    // if(this.loggedInUser == undefined){this.routerService.toLogin()} //Not required now as used guard.
    //Thru login we saved username in localstorage and guard is checking is there data in userstorage, then only it will route to dashboard

    if(this.loggedInUser == undefined){this.loggedInUser = localStorage.getItem("username")}
  }

}
