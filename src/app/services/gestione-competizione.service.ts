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
    return this.http.get(`${this.buildURL("GestioneCompetizione/getScommesseRisultati")}`,this.myheaders)
    .pipe(map((res) => {

        return res['data'];
      }),
      catchError(this.handleError));
  }

  updScommesseRisultati(calendario: Calendario) {

    return this.http.put(`${this.buildURL("GestioneCompetizione/updScommesseRisultati")}`, { data: calendario },this.myheaders)
      .pipe(map((res) => {

        return res['data'];
      }),
        catchError(this.handleError));
  }

  getScommesseGironi(): Observable<any[]> {
    return this.http.get(`${this.buildURL("GestioneCompetizione/getScommesseGironi")}`,this.myheaders)
    .pipe(map((res) => {

        return res['data'];
      }),
      catchError(this.handleError));
  }

  updScommesseGirone(gironi: ScommesseAntepost) {
    return this.http.put(`${this.buildURL("GestioneCompetizione/updScommesseGirone")}`, { data: gironi },this.myheaders)
      .pipe(map((res) => {
        return res['data'];
      }),
        catchError(this.handleError));
  }

  getScommesseBase(): Observable<any[]> {
    return this.http.get(`${this.buildURL("GestioneCompetizione/getScommesseBase")}`,this.myheaders)
    .pipe(map((res) => {

        return res['data'];
      }),
      catchError(this.handleError));
  }

  delScommesseBase(gruppo: string, risultato: string) {

    const params = new HttpParams().set('gruppo', gruppo).set('risultato', risultato);

    return this.http.get(`${this.buildURL("GestioneCompetizione/delScommesseBase")}`, { params: params, headers: this.myheaders.headers })
      .pipe(map((res) => {

        return res['data'];
      }),
        catchError(this.handleError));
  }

  setScommesseBase(gruppo: string, risultato: string) {

    const params = new HttpParams().set('gruppo', gruppo).set('risultato', risultato);

    return this.http.get(`${this.buildURL("GestioneCompetizione/setScommesseBase")}`, { params: params, headers: this.myheaders.headers })
      .pipe(map((res) => {

        return res['data'];
      }),
        catchError(this.handleError));
  }


}
