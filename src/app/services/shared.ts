import { Http, Headers } from '@angular/http';
import * as API from '../global.const/restAPIs'
import { Injectable } from '@angular/core'
@Injectable()
export class SharedService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) { }
    validateUsername(username) {
        return this.http.get(API.CHECK_USER_ENDPOINT+ `?uname=${username}`).map(res => res.json());
    }
}