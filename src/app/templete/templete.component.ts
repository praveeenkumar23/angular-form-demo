import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../datastore.service';

@Component({
  selector: 'app-templete',
  templateUrl: './templete.component.html',
  styleUrls: ['./templete.component.css']
})
export class TempleteComponent implements OnInit {

  data: any = {};

  constructor(private dataS: DatastoreService) {

  }

  ngOnInit() {
    this.data = this.dataS.store;
  }

}
