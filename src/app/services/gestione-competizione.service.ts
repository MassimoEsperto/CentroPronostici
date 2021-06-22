import { ScommesseAntepost } from 'src/app/classi/model/scommesse-antepost';
import { Injectable } from '@angular/core';
import { Calendario } from '../classi/model/calendario';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpSenderService } from './http-sender-service';

@Injectable({
  providedIn: 'root'
})
export class GestioneCompetizioneService extends HttpSenderService {
 
  calendario: Calendario[];
  altrescommesse : ScommesseAntepost[];
  
  constructor(private http: HttpClient) {
    super();
   }

   getScommesseRisultati(): Observable<any[]> {
    return this.http.get(`${this.buildURL("GestioneCompetizione/getScommesseRisultati")}`).pipe(
      map((res) => {
 
        return res['data'];
    }),
    catchError(this.handleError));
  }

  updScommesseRisultati(calendario: Calendario) {
      
    return this.http.put(`${this.buildURL("GestioneCompetizione/updScommesseRisultati")}`, { data: calendario })
      .pipe(map((res) => {
       
        return res['data'];
      }),
      catchError(this.handleError));
  }

  getScommesseGironi(): Observable<any[]> {
    return this.http.get(`${this.buildURL("GestioneCompetizione/getScommesseGironi")}`).pipe(
      map((res) => {
 
        return res['data'];
    }),
    catchError(this.handleError));
  }
}
