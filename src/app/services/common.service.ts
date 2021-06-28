import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpSenderService } from './http-sender-service';

@Injectable({
  providedIn: 'root'
})
export class CommonService extends HttpSenderService {
    
    constructor(private http: HttpClient) {
      super();
     }
    
     getCombo(): Observable<any> {
      
      return this.http.get(`${this.buildURL("PronosticiUtente/lookups")}`).pipe(
        map((res) => {
          
          return res['data'];
      }),
      catchError(this.handleError));
    }

    getOpzioni(): Observable<any> {
      
      return this.http.get(`${this.buildURL("GestioneCompetizione/getOpzioni")}`).pipe(
        map((res) => {
          
          return res['data'];
      }),
      catchError(this.handleError));
    }

    updOpzioni(blocco:string,scadenza: string,testo: string) {
      
      const params = new HttpParams().set('blocco', blocco)
      .set('scadenza', scadenza).set('testo', testo)
    
      return this.http.get(`${this.buildURL("GestioneCompetizione/updOpzioni")}`, { params: params })
        .pipe(map((res) => {
    
          return res['data'];
        }),
          catchError(this.handleError));
    }
  
  }
  