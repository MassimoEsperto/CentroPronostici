import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Schedina } from '../classi/model/schedina';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { HttpSenderService } from './http-sender-service';
import { Pronostici } from '../classi/model/pronostici';

@Injectable({
  providedIn: 'root'
})
export class GestionePronosticiService extends HttpSenderService {

  scheda: Schedina[];
  schedaPiena: Schedina[];
  schedaFinita: Schedina[];
  pronostico: Pronostici[];

  constructor(private http: HttpClient) { super(); }

  /**
   * 
   * @param username 
   * restituisce un id nuovo al quale associare la nuova scheda
   * ogni user avra una lista di id per ogni scommessa giocata
   */
  newSchedina(username: string) {
    const params = new HttpParams()
      .set('username', username);

    return this.http.get(`${this.buildURL("GestioneSchedina/newSchedina")}`, { params: params })
      .pipe(map((res) => {

        return res['data'].id_schedina;
      }),
        catchError(this.handleError));
  }



  /**
   * 
   * @param id_schedina 
   * @param username 
   * restituisce la schedina vuota senza ancora i risultati
   */
  schedinaVuota(id_schedina: number, username: string) {
    const params = new HttpParams()
      .set('id_schedina', id_schedina.toString()).set('username', username);

    return this.http.get<Schedina[]>(`${this.buildURL("GestioneSchedina/schedinaVuota")}`, { params: params })
      .pipe(map((res) => {

        this.scheda = res['data'];
        return this.scheda;

      }),
        catchError(this.handleError));
  }

  schedinaPiena(id_schedina: number) {
    const params = new HttpParams()
      .set('id_schedina', id_schedina.toString());

    return this.http.get<Schedina[]>(`${this.buildURL("GestioneSchedina/schedinaPiena")}`, { params: params })
      .pipe(map((res) => {

        this.schedaPiena = res['data'];
        return this.schedaPiena;

      }),
        catchError(this.handleError));
  }

  schedinaFinale(id_schedina: number) {
    const params = new HttpParams()
      .set('id_schedina', id_schedina.toString());

    return this.http.get<Schedina[]>(`${this.buildURL("GestioneSchedina/schedinaFinale")}`, { params: params })
      .pipe(map((res) => {

        this.schedaFinita = res['data'];
        return this.schedaFinita;

      }),
        catchError(this.handleError));
  }

  /**
   * 
   * @param pronostico 
   * Inserimento dei pronostici
   */
  insert(pronostico: Schedina[]) {


    return this.http.post(`${this.buildURL("GestionePronostici/insert")}`, { data: pronostico })
      .pipe(map((res) => {

        return res['data'];
      }),
        catchError(this.handleError));
  }
  /**
   * 
   * @param pronostico 
   * modifica del pronostico
   */
  update(pronostico: Schedina) {

    return this.http.post(`${this.buildURL("GestionePronostici/update")}`, { data: pronostico })
      .pipe(map((res) => {
        const scheda = this.schedaPiena.find((item) => {
          return item['id_partita'] === pronostico['id_partita'];
        });
        if (scheda) {
          scheda['risultato'] = pronostico['risultato'];
        }
        return this.schedaPiena;

        return res['data'];
      }),
        catchError(this.handleError));
  }

  delete(id_schedina: number): Observable<Pronostici[]> {
    const params = new HttpParams()
      .set('id_schedina', id_schedina.toString());

    return this.http.get(`${this.buildURL("GestioneSchedina/deleteSchedina")}`, { params: params })
      .pipe(map(res => {

        const filterid = this.pronostico = this.pronostico.filter(item => item.id_schedina !== id_schedina);
        return this.pronostico = filterid;
      }),
        catchError(this.handleError));
  }

  /**
   * 
   * @param username 
   * @param pass 
   * restituisce la lista di pronostici associati al tuo user
   */
  list(username: string) {
    const params = new HttpParams()
      .set('username', username);

    return this.http.get<Pronostici[]>(`${this.buildURL("GestionePronostici/list")}`, { params: params })
      .pipe(map((res) => {

        this.pronostico = res['data'];
        return this.pronostico;

      }),
        catchError(this.handleError));
  }

  listFinale(username: string) {
    const params = new HttpParams()
      .set('username', username);

    return this.http.get<Pronostici[]>(`${this.buildURL("GestionePronostici/listFinale")}`, { params: params })
      .pipe(map((res) => {

        this.pronostico = res['data'];
        return this.pronostico;

      }),
        catchError(this.handleError));
  }


  classifica() {

    return this.http.get<Pronostici[]>(`${this.buildURL("GestionePronostici/classifica")}`)
      .pipe(map((res) => {

        this.pronostico = res['data'];
        return this.pronostico;

      }),
        catchError(this.handleError));
  }

  puntiPrevisti() {

    return this.http.get<any>(`${this.buildURL("GestionePronostici/puntiPrevisti")}`)
      .pipe(map((res) => {

        return res['data'];

      }),
        catchError(this.handleError));
  }


  /**
   * get e set della variabile che decide se si possano inserire ancora pronostici
   */
  getBloccato(): Observable<boolean> {
    return this.http.get(`${this.buildURL("GestionePronostici/getBloccato")}`).pipe(
      map((res) => {
        return res['data'];
      }),
      catchError(this.handleError));
  }
  setBloccato(variabile: number): Observable<boolean> {
    const params = new HttpParams()
      .set('variabile', variabile.toString());

    return this.http.get(`${this.buildURL("GestionePronostici/setBloccato")}`, { params: params })
      .pipe(map(res => {
        return res['data'];
      }),
        catchError(this.handleError));
  }




  /*---------------------- NUOVI-------------------------*/

  getSchedaDaCompilare() {

    return this.http.get<any>(`${this.buildURL("PronosticiUtente/getSchedaDaCompilare")}`)
      .pipe(map((res) => {
        console.log("getSchedaDaCompilare", res['data'])
        return res['data'];

      }),
        catchError(this.handleError));
  }

  getIdSchedina(username: string) {
    const params = new HttpParams().set('username', username);

    return this.http.get(`${this.buildURL("PronosticiUtente/getIdScheda")}`, { params: params })
      .pipe(map((res) => {

        return res['data'].id_schedina;
      }),
        catchError(this.handleError));
  }

  getSchedaCompilata(id_schedina: string) {

    const params = new HttpParams().set('id_schedina', id_schedina);

    return this.http.get(`${this.buildURL("PronosticiUtente/getSchedaCompilata")}`, { params: params })
      .pipe(map((res) => {

        return res['data'];
      }),
        catchError(this.handleError));
  }



  setScheda(pronostico: any) {

    return this.http.post(`${this.buildURL("PronosticiUtente/setScheda")}`, { data: pronostico })
      .pipe(map((res) => {

        return res['data'];
      }),
        catchError(this.handleError));
  }

  delScheda(id_schedina: number) {

    const params = new HttpParams().set('id_schedina', id_schedina.toString());

    return this.http.get(`${this.buildURL("PronosticiUtente/delScheda")}`, { params: params })
      .pipe(map(res => {

        return res['data'];

      }),
        catchError(this.handleError));
  }

  updEventoScheda(pronostico: any) {

    return this.http.post(`${this.buildURL("PronosticiUtente/updEventoScheda")}`, { data: pronostico })
      .pipe(map((res) => {

        return res['data'];
      }),
        catchError(this.handleError));
  }

  getClassificaByUtente(username: string) {

    const params = new HttpParams().set('username', username);

    return this.http.get<any[]>(`${this.buildURL("PronosticiUtente/getClassificaByUtente")}`, { params: params })
      .pipe(map((res) => {

        return res['data'];

      }),
        catchError(this.handleError));
  }

  getClassificaGenerale() {

    return this.http.get<any[]>(`${this.buildURL("PronosticiUtente/getClassificaGenerale")}`)
      .pipe(map((res) => {

        return res['data'];

      }),
        catchError(this.handleError));
  }

}
