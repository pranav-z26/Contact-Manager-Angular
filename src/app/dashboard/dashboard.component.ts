import { Component, OnInit } from '@angular/core';
import { Cmanagerm } from '../models/cmanager/cmanager.module';
import { CmanagerService } from '../service/cmanager.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  carray: Array<Cmanagerm> = [];
  constructor(private CmanagerService: CmanagerService) {
    this.CmanagerService.getContact().subscribe(data => this.carray = [...data])
  }
  ngOnInit(): void {
  }

}
