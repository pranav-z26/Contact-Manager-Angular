import { Component, Input, OnInit } from '@angular/core';
import { Cmanagerm } from '../models/cmanager/cmanager.module';
import { CmanagerService } from '../service/cmanager.service';

@Component({
  selector: 'app-contact-taker',
  templateUrl: './contact-taker.component.html',
  styleUrls: ['./contact-taker.component.css']
})
export class ContactTakerComponent implements OnInit {
  @Input() // to take the input from parent to child
  carray:Array<Cmanagerm> = [];
  contact:Cmanagerm = new Cmanagerm();
  constructor(private CmanagerService:CmanagerService){}
 
  addContact(){
    // add todo into the array
    this.carray.push(this.contact);
    // add todo into db.json
    this.CmanagerService.addContact(this.contact)
    .subscribe(data => console.log(data))
    this.contact  = new Cmanagerm();
  }
  ngOnInit(): void {
  }

}
