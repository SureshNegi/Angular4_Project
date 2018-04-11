import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormBuilder, FormGroup, Validators } from '@angular/forms';
//import {UsernameEmailValidator} from '../../../../shared/username-email-validator';
import { Http } from '@angular/http';
//import {UsernameValidator} from '../../../../shared/username-email-validator';
@Component({
  selector: 'welcome-page',
  templateUrl: './wecomeUser.component.html',
  styleUrls: ['./wecomeUser.component.css'],
  //providers:[UsernameValidator]

})
export class UserWelcomeComponent implements OnInit {
  ngOnInit() {
  }
  registrationForm: FormGroup;
  username: FormControl;
  email: FormControl;
  password: FormControl;
  submitAttempt: boolean = false;

  // constructor(private http: Http, private builder: FormBuilder,private userValidator:UsernameValidator) {
  //   this.username = new FormControl('', Validators.required,userValidator.checkUsername.bind(userValidator))
  //   //Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z]*'),
  //    //Validators.required]), usernameValidator.checkUsername.bind(usernameValidator)
  //   //this.username = new FormControl('', Validators.required,UsernameEmailValidator.checkUsername)
  //   this.email = new FormControl('', Validators.required)
  //   this.password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)]));

  //   this.registrationForm = builder.group({
  //     username: this.username,
  //     email: this.email,
  //     password: this.password
  //   });
  // }




}
