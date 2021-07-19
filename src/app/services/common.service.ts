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
    


     getCombo() {
      
      return this.http.get(`${this.buildURL("ServiziComuni/getCombo")}`, this.myheaders)
      .pipe(map((res) => {
          
          return res['data'];
      }),
      catchError(this.handleError));
    }


     getDettagliCompetizione() {
      
      return this.http.get(`${this.buildURL("ServiziComuni/getCompetizione")}`, this.myheaders)
      .pipe(map((res) => {
          
          return res['data'];
      }),
      catchError(this.handleError));
    }
  }
  