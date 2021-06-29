import { ScommesseAntepost } from 'src/app/classi/model/scommesse-antepost';
import { Injectable } from '@angular/core';
import { Calendario } from '../classi/model/calendario';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpSenderService } from './http-sender-service';

@Injectable({
  providedIn: 'root'
})
export class GestioneCompetizioneService extends HttpSenderService {

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


}
