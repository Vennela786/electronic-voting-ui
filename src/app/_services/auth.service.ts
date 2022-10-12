import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { mergeMap} from 'rxjs/operators'

const AUTH_API = 'http://localhost:2900/voting/authorise/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(signUpForm:any): Observable<any> {
    return this.http.post(AUTH_API + 'signUp', JSON.stringify(signUpForm), httpOptions).
      pipe(mergeMap(v=> {
        console.log("in service-----", v)
        if(v === null){
          return throwError('v is null');  
        } else {
             return of(v)
        } }))
  }
}