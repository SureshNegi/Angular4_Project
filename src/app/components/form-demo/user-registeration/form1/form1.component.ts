import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormBuilder, FormGroup, Validators } from '@angular/forms';
//import {UsernameEmailValidator} from '../../../../shared/username-email-validator';
import { Http } from '@angular/http';
import {UsernameValidator} from '../../../../shared/username-email-validator';
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css'],
  //providers:[UsernameValidator]
  
})
export class Form1Component implements OnInit {
  ngOnInit() {
  }
  registrationForm: FormGroup;
  username: FormControl;
  email: FormControl;
  password: FormControl;
  submitAttempt: boolean = false;

  constructor(private http: Http, private builder: FormBuilder,private userValidator:UsernameValidator) {
    this.username = new FormControl('', Validators.required,userValidator.checkUsername.bind(userValidator))
    //Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z]*'),
     //Validators.required]), usernameValidator.checkUsername.bind(usernameValidator)
    //this.username = new FormControl('', Validators.required,UsernameEmailValidator.checkUsername)
    this.email = new FormControl('', Validators.required)
    this.password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)]));

    this.registrationForm = builder.group({
      username: this.username,
      email: this.email,
      password: this.password
    });
  }

  registerUser(user) {
    this.submitAttempt = true;
    if (this.registrationForm.valid) {
      let data = JSON.stringify(user);
      alert('Your account has been created!')
      // this.http.post(CREATE_USER_ENDPOINT, data)
      //   .subscribe(
      //   data => alert('Your account has been created!'),
      //   error => alert(error.json().message)
      //   );
    }
  }


}
