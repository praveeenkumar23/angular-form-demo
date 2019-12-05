import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../datastore.service';

@Component({
  selector: 'app-reactive-data',
  templateUrl: './reactive-data.component.html',
  styleUrls: ['./reactive-data.component.css']
})
export class ReactiveDataComponent implements OnInit {
readata:any={}

  constructor(private readatas:DatastoreService) { }

  ngOnInit() {
    this.readata = this.readatas.reactivestore
  }
 
}
