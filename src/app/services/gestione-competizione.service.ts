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
  altrescommesse: ScommesseAntepost[];

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

  updScommesseGirone(gironi: ScommesseAntepost) {
    return this.http.put(`${this.buildURL("GestioneCompetizione/updScommesseGirone")}`, { data: gironi })
      .pipe(map((res) => {
        return res['data'];
      }),
        catchError(this.handleError));
  }

  getScommesseBase(): Observable<any[]> {
    return this.http.get(`${this.buildURL("GestioneCompetizione/getScommesseBase")}`).pipe(
      map((res) => {

        return res['data'];
      }),
      catchError(this.handleError));
  }

  delScommesseBase(gruppo: string, risultato: string) {

    const params = new HttpParams().set('gruppo', gruppo).set('risultato', risultato);

    return this.http.get(`${this.buildURL("GestioneCompetizione/delScommesseBase")}`, { params: params })
      .pipe(map((res) => {

        return res['data'];
      }),
        catchError(this.handleError));
  }

  setScommesseBase(gruppo: string, risultato: string) {

    const params = new HttpParams().set('gruppo', gruppo).set('risultato', risultato);

    return this.http.get(`${this.buildURL("GestioneCompetizione/setScommesseBase")}`, { params: params })
      .pipe(map((res) => {

        return res['data'];
      }),
        catchError(this.handleError));
  }

    /**
   * get e set della variabile che decide se si possano inserire ancora pronostici
   */
     getBloccato(): Observable<boolean> {
      return this.http.get(`${this.buildURL("GestioneCompetizione/getBlocco")}`).pipe(
        map((res) => {
          return res['data'];
        }),
        catchError(this.handleError));
    }
    setBloccato(variabile: number): Observable<boolean> {
      const params = new HttpParams()
        .set('variabile', variabile.toString());
  
      return this.http.get(`${this.buildURL("GestioneCompetizione/updBlocco")}`, { params: params })
        .pipe(map(res => {
          return res['data'];
        }),
          catchError(this.handleError));
    }

}
