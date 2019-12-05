import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DatastoreService } from '../datastore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model: any = {};
  passwordVisible:boolean = true;

  constructor(private router: Router,  private data:DatastoreService) { }

  ngOnInit() {

  }
  onSubmit(loginForm: NgForm) {
    if (loginForm.valid){
      this.router.navigate(['templete']);
      this.data.store = this.model;      
    }
  }

  fnShowPassword(){
    console.log(this.fnShowPassword)
    this.passwordVisible = !this.passwordVisible;
  }
  
}
