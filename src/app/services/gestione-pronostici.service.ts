import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { HttpSenderService } from './http-sender-service';


@Injectable({
  providedIn: 'root'
})
export class GestionePronosticiService extends HttpSenderService {

  constructor(private http: HttpClient) { super(); }


  getSchedaDaCompilare() {

    return this.http.get<any>(`${this.buildURL("PronosticiUtente/getSchedaDaCompilare")}`, this.myheaders)
      .pipe(map((res) => {
        return res['data'];

      }),
        catchError(this.handleError));
  }

  getIdSchedina(username: string, desc: string) {
    const params = new HttpParams().set('username', username).set('descrizione', desc);

    return this.http.get(`${this.buildURL("PronosticiUtente/getIdScheda")}`, { params: params, headers: this.myheaders.headers })
      .pipe(map((res) => {

        return res['data'].id_schedina;
      }),
        catchError(this.handleError));
  }

  getSchedaCompilata(id_schedina: string) {

    const params = new HttpParams().set('id_schedina', id_schedina);

    return this.http.get(`${this.buildURL("PronosticiUtente/getSchedaCompilata")}`, { params: params, headers: this.myheaders.headers })
      .pipe(map((res) => {

        return res['data'];
      }),
        catchError(this.handleError));
  }



  setScheda(pronostico: any) {

    return this.http.post(`${this.buildURL("PronosticiUtente/setScheda")}`, { data: pronostico }, this.myheaders)
      .pipe(map((res) => {

        return res['data'];
      }),
        catchError(this.handleError));
  }

  delScheda(id_schedina: number) {

    const params = new HttpParams().set('id_schedina', id_schedina.toString());

    return this.http.get(`${this.buildURL("PronosticiUtente/delScheda")}`, { params: params, headers: this.myheaders.headers })
      .pipe(map(res => {

        return res['data'];

      }),
        catchError(this.handleError));
  }

  updEventoScheda(pronostico: any) {

    return this.http.post(`${this.buildURL("PronosticiUtente/updEventoScheda")}`, { data: pronostico }, this.myheaders)
      .pipe(map((res) => {

        return res['data'];
      }),
        catchError(this.handleError));
  }

  getSchedeByUtente(username: string) {

    const params = new HttpParams().set('username', username);

    return this.http.get<any[]>(`${this.buildURL("PronosticiUtente/getSchedeByUtente")}`, { params: params, headers: this.myheaders.headers })
      .pipe(map((res) => {

        return res['data'];

      }),
        catchError(this.handleError));
  }

  getClassificaByUtente(username: string) {

    return this.http.get<any[]>(`${this.buildURL("PronosticiUtente/getClassificaGenerale")}`, this.myheaders)
      .pipe(map((res) => {

        let classifica = res['data']
        return classifica ? classifica.filter(i => i.id_utente == username) : [];

      }),
        catchError(this.handleError));
  }


  getClassificaGenerale() {

    return this.http.get<any[]>(`${this.buildURL("PronosticiUtente/getClassificaGenerale")}`, this.myheaders)
      .pipe(map((res) => {

        return res['data'];

      }),
        catchError(this.handleError));
  }

}
