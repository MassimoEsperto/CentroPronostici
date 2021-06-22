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
export class CalendarioService extends HttpSenderService {
 
  calendario: Calendario[];
  altrescommesse : ScommesseAntepost[];
  
  constructor(private http: HttpClient) {
    super();
   }
  
    getAll(): Observable<Calendario[]> {
      return this.http.get(`${this.buildURL("GestioneCalendario/list")}`).pipe(
        map((res) => {
      
          this.calendario = res['data'];
   
          return this.calendario;
      }),
      catchError(this.handleError));
    }

    getScommesseAntepost(): Observable<ScommesseAntepost[]> {
      return this.http.get(`${this.buildURL("GestioneCalendario/listAntepost")}`).pipe(
        map((res) => {
      
          this.altrescommesse = res['data'];
    
          return this.altrescommesse;
      }),
      catchError(this.handleError));
    }

    
    update(calendario: Calendario): Observable<Calendario[]> {
      
      return this.http.put(`${this.buildURL("GestioneCalendario/update")}`, { data: calendario })
        .pipe(map((res) => {
         
          const theMatch = this.calendario.find((item) => {
            return +item['id_partita'] === +calendario['id_partita'];
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

    updateScommesseAntepost(altre: ScommesseAntepost): Observable<ScommesseAntepost[]> {
      return this.http.put(`${this.buildURL("GestioneCalendario/updateScommesseAntepost")}`, { data: altre })
        .pipe(map((res) => {
          const theMatch = this.altrescommesse.find((item) => {
            return +item['id_partita'] === +altre['id_partita'];
          });
          if (theMatch) {
            theMatch['scommessa'] = altre['scommessa'];
            theMatch['risultato'] = altre['risultato'];
          }
          return this.altrescommesse;
        }),
        catchError(this.handleError));
    }

    insertBomber(bomber: string): Observable<string> {
    
      const params = new HttpParams().set('nome', bomber);
  
     return this.http.get(`${this.buildURL("CreaCompetizione/setBomber")}`, { params: params })
        .pipe(map((res) => {
         
          let cannoniere=(res['data'].nome);
         
          return cannoniere;
        }),
        catchError(this.handleError));
    }

    deleteBomber(bomber: string): Observable<string> {
     
      const params = new HttpParams().set('nome', bomber);
  
     return this.http.get(`${this.buildURL("CreaCompetizione/delBomber")}`, { params: params })
        .pipe(map((res) => {
         
          let cannoniere=(res['data'].nome);
         
          return cannoniere;
        }),
        catchError(this.handleError));
    }
  
    insertSquadra(nome: string,girone: string): Observable<any> {
    
      const params = new HttpParams().set('nome', nome).set('girone',girone);
  
     return this.http.get(`${this.buildURL("CreaCompetizione/setSquadra")}`, { params: params })
        .pipe(map((res) => {
         
          let nome=(res['data'].nome);
       
          return {nome:nome,girone:girone};
        }),
        catchError(this.handleError));
    }

    deleteSquadra(nome: string): Observable<string> {
     
      const params = new HttpParams().set('nome', nome);
  
     return this.http.get(`${this.buildURL("CreaCompetizione/delSquadra")}`, { params: params })
        .pipe(map((res) => {
         
          let element=(res['data'].nome);
         
          return element;
        }),
        catchError(this.handleError));
    }
  
    
}
