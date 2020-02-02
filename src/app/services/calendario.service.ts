import { Injectable } from '@angular/core';
import { Calendario } from '../classi/model/calendario';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpSenderService } from './http-sender-service';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService extends HttpSenderService {
 
  calendario: Calendario[];
  
  constructor(private http: HttpClient) {
    super();
   }
  
    getAll(): Observable<Calendario[]> {
      return this.http.get(`${this.buildURL("GestioneCalendario/list")}`).pipe(
        map((res) => {
      
          this.calendario = res['data'];
          console.log(res['data']);
          return this.calendario;
      }),
      catchError(this.handleError));
    }

    update(calendario: Calendario): Observable<Calendario[]> {
      console.log('call servizio');
      console.log(calendario);
      return this.http.put(`${this.buildURL("GestioneCalendario/update")}`, { data: calendario })
        .pipe(map((res) => {
          console.log('update effettuato');
          const theMatch = this.calendario.find((item) => {
            return +item['id_calendario'] === +calendario['id_calendario'];
          });
          if (theMatch) {
            theMatch['partita'] = calendario['partita'];
            theMatch['goalc'] = calendario['goalc'];
            theMatch['goalt'] = calendario['goalt'];
          }
          return this.calendario;
        }),
        catchError(this.handleError));
    }

   
    
}
