import { Component, Input, OnInit } from '@angular/core';
import { Cmanagerm } from '../models/cmanager/cmanager.module';

@Component({
  selector: 'app-contact-viewer',
  templateUrl: './contact-viewer.component.html',
  styleUrls: ['./contact-viewer.component.css']
})
export class ContactViewerComponent implements OnInit {
  @Input()
  carray:Array<Cmanagerm> = [];
  contact:Cmanagerm = new Cmanagerm();
  constructor() { }

  ngOnInit(): void {
  }

}
