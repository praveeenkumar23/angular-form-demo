import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatastoreService } from '../datastore.service';
// import { ValidatorDirectiveDirective } from '../directives/validator-directive.directive';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {
  hide = true;
 
  hero = { fname: '', lname:'',mobile:'', address1:'', address2:'', email:'', password:'',conpassword:'', Gender:'', country:'', state:'', city:''};
  heroForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private readata:DatastoreService) {

  }

  ngOnInit() {
    console.log(this.heroForm);
    this.heroForm = new FormGroup({        
      'fname': new FormControl(this.hero.fname, [
        Validators.required,
        Validators.minLength(4),
        // Validators.pattern
        // ValidatorDirectiveDirective(/bob/i)
      ]), // <-- add custom validator at the FormGroup 
      
      'lname': new FormControl(this.hero.lname, [
        Validators.required,
        Validators.minLength(4),
        // ValidatorDirectiveDirective(/bob/i)
      ]),
      'mobile': new FormControl(this.hero.mobile, [
        Validators.required,
        Validators.minLength(4),
        // ValidatorDirectiveDirective(/bob/i)
      ]),
      'Gender': new FormControl(this.hero.Gender, [
        Validators.required,
        // ValidatorDirectiveDirective(/bob/i)
      ]),
      'address1': new FormControl(this.hero.address1, [
        Validators.required,
        Validators.minLength(4),
        // ValidatorDirectiveDirective(/bob/i)
      ]),
      'address2': new FormControl(this.hero.address2, [
        Validators.required,
        Validators.minLength(4),
        // ValidatorDirectiveDirective(/bob/i)
      ]),
      'email': new FormControl(this.hero.email, [
        Validators.required,
        Validators.minLength(4),
        // ValidatorDirectiveDirective(/bob/i)
      ]),
      'password': new FormControl(this.hero.password, [
        Validators.required,
        Validators.minLength(4),
        // ValidatorDirectiveDirective(/bob/i)
      ]),
      'conpassword': new FormControl(this.hero.conpassword, [
        Validators.required,
        Validators.minLength(4),
        // ValidatorDirectiveDirective(/bob/i)
      ]),
      'country': new FormControl(this.hero.country, [
        Validators.required,
      ]),
      'state': new FormControl(this.hero.state, [
        Validators.required,
      ]),
      'city': new FormControl(this.hero.city, [
        Validators.required,
      ]),
    })
  }  get fname() { return this.heroForm.get('fname'); }
  get lname() { return this.heroForm.get('lname'); }
  get mobile() { return this.heroForm.get('mobile'); }
  get Gender() { return this.heroForm.get('Gender'); }
  get address1() { return this.heroForm.get('address1'); }
  get address2() { return this.heroForm.get('address2'); }
  get email() { return this.heroForm.get('email'); }
  get password() { return this.heroForm.get('password'); }
  get conpassword() { return this.heroForm.get('conpassword'); }
  get country() { return this.heroForm.get('country'); }
  get state() { return this.heroForm.get('state'); }
  get city() { return this.heroForm.get('city'); }

  signup(heroForm: NgForm){
    console.log(heroForm)
    if(heroForm.valid){
    this.router.navigate(['reactive-data'])
    this.readata.reactivestore = this.heroForm;
   }

  }
}
