import { HttpModule, Http, RequestOptions, BrowserXhr, BaseResponseOptions } from '@angular/http'
import { ResponseOptions, BaseRequestOptions, ConnectionBackend, XSRFStrategy, XHRBackend, CookieXSRFStrategy } from '@angular/http'

import { Injectable, Injector, ReflectiveInjector } from '@angular/core'
import { CHECK_USER_ENDPOINT } from './api';
import { FormControl, FormControlDirective, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { SharedService } from '../services/shared'
//import {CHECK_USER_ENDPOINT} from './api';
//constructor(private http: Http, private _HttpClient: HttpClient, private blockUI: LoadingService) { }


// private _HttpClient: HttpClient,
// private blockUI: LoadingService

interface IUsernameEmailValidator {
}

function checkUser(control: FormControl, source: string): Observable<IUsernameEmailValidator> {

  // Manually inject Http


  // Return an observable with null if the
  // username or email doesn't yet exist, or
  // an objet with the rejetion reason if they do
  //JSON.stringify(parmObj), { headers: this.headers }
  let injector = ReflectiveInjector.resolveAndCreate([
    HttpModule,
    Http,
    BrowserXhr,
    { provide: RequestOptions, useClass: BaseRequestOptions },
    { provide: ResponseOptions, useClass: BaseResponseOptions },
    { provide: ConnectionBackend, useClass: XHRBackend },
    { provide: XSRFStrategy, useFactory: () => new CookieXSRFStrategy() },
  ]);
  let httpHandler = injector.get(Http);
  let httpHeaders = new Headers({ 'Content-Type': 'application/json' });
  return new Observable((obs: any) => {
    control
      .valueChanges
      .debounceTime(400)
      .flatMap(value => httpHandler.post(CHECK_USER_ENDPOINT, JSON.stringify({ [source]: value }), { headers: this.httpHeaders }))
      .subscribe(
      data => {
        obs.next(null);
        obs.complete();
      },
      error => {
        let message = error.json().message;
        let reason;
        if (message === 'Username taken') {
          reason = 'usernameTaken';
        }
        if (message === 'Email taken') {
          reason = 'emailTaken';
        }
        obs.next({ [reason]: true });
        obs.complete();
      }
      );
  });
}

// export class UsernameEmailValidator {

//   constructor(private http: Http, private service: SharedService) { }


//   static checkUsername(control: FormControl) {
//     // return checkUser(control, 'username');
//     return new Promise(resolve => {

//       //Fake a slow response from server

//       setTimeout(() => {
//         if (control.value.toLowerCase() === "greg") {

//           resolve({
//             "usernameTaken": true
//           });

//         } else {
//           resolve(null);
//         }
//       }, 1000);

//     });
//   }

//   static checkEmail(control: FormControl) {
//     return checkUser(control, 'email');
//   }
// }
@Injectable()
export class UsernameValidator {

  debouncer: any;

  constructor(public service: SharedService) {

  }

  checkUsername(control: FormControl): any {

    //clearTimeout(this.debouncer);

    return new Promise(resolve => {

      this.debouncer = setTimeout(() => {

        this.service.validateUsername(control.value).subscribe((res) => {
          if (res.ok) {
            resolve(null);
          }
        }, (err) => {
          resolve({ 'usernameTaken': true });
        });

      }, 1000);

    });
  }

}