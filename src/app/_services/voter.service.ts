import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { mergeMap} from 'rxjs/operators'


const AUTH_API = 'http://localhost:2900/voting/voter/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class VoterService {
    constructor(private http: HttpClient) { }

    addVoter(partyForm:any, pollId: any): Observable<any> {
        return this.http.post(AUTH_API + `add-voter/${pollId}`, JSON.stringify(partyForm), httpOptions).
          pipe(mergeMap(v=> {
            console.log("in service-----", v)
            if(v === null){
              return throwError('v is null');  
            } else {
                 return of(v)
            } }))
      }
    
    listVoter(loginId:any): Observable<any> {
      return this.http.get(AUTH_API + `list/${loginId}`, httpOptions).
        pipe(mergeMap(v=> {
          console.log("in service-----", v)
          if(v === null){
            return throwError('v is null');  
          } else {
                return of(v)
          } }))
    }
}