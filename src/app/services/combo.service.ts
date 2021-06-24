import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpSenderService } from './http-sender-service';
import { Combo } from '../classi/model/combo';

@Injectable({
  providedIn: 'root'
})
export class ComboService extends HttpSenderService {
 
coombosel:Combo;
  
  constructor(private http: HttpClient) {
    super();
   }
  
   getCombo(): Observable<Combo> {
    
    return this.http.get(`${this.buildURL("PronosticiUtente/lookups")}`).pipe(
      map((res) => {
        this.coombosel=res['data'];
        
        return this.coombosel;
    }),
    catchError(this.handleError));
  }

}
