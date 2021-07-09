import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Utente } from '../classi/model/utente';
import { HttpSenderService } from './http-sender-service';


@Injectable({
  providedIn: 'root'
})
export class GestioneUtenteService extends HttpSenderService {
 

constructor(private http: HttpClient) {super(); }

  getUtenti(): Observable<Utente[]> {
    return this.http.get(`${this.buildURL("GestioneUtenti/getUtenti")}`).pipe(
      map((res) => {
        return res['data'];
    }),
    catchError(this.handleError));
  }


  insert(utente: Utente) {

   return this.http.post(`${this.buildURL("GestioneUtenti/register")}`, { data: utente })
      .pipe(map((res) => {
        return res['data'];
      }),
      catchError(this.handleError));
  }


  update(utente: Utente) {
    return this.http.put(`${this.buildURL("GestioneUtenti/updUtente")}`, { data: utente })
      .pipe(map((res) => {
        return res['data'];
      }),
      catchError(this.handleError));
  }

  delete(username:string) {
    const params = new HttpParams().set('username', username);

    return this.http.get(`${this.buildURL("GestioneUtenti/delUtente")}`, { params: params })
      .pipe(map(res => {
        return res['data'];
      }),
      catchError(this.handleError));
  }


}
