import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Utente } from '../classi/model/utente';
import { HttpSenderService } from './http-sender-service';


@Injectable({
  providedIn: 'root'
})
export class GestioneUtenteService extends HttpSenderService {
 
utenti: Utente[];

constructor(private http: HttpClient) {super(); }

  getAll(): Observable<Utente[]> {
    return this.http.get(`${this.buildURL("GestioneUtenti/list")}`).pipe(
      map((res) => {
        this.utenti = res['data'];
        console.log(res['data']);
        return this.utenti;
    }),
    catchError(this.handleError));
  }


  insert(utente: Utente): Observable<Utente[]> {
    console.log(utente);
    console.log(JSON.stringify(utente));

   return this.http.post(`${this.buildURL("GestioneUtenti/insert")}`, { data: utente })
      .pipe(map((res) => {
        this.utenti.push(res['data']);
        return this.utenti;
      }),
      catchError(this.handleError));
  }


  update(utente: Utente): Observable<Utente[]> {
    return this.http.put(`${this.buildURL("GestioneUtenti/update")}`, { data: utente })
      .pipe(map((res) => {
        console.log('update effettuato');
        const theUtente = this.utenti.find((item) => {
          return item['username'] === utente['username'];
        });
        if (theUtente) {
          theUtente['ruolo'] = utente['ruolo'];
          theUtente['email'] = utente['email'];
        }
        return this.utenti;
      }),
      catchError(this.handleError));
  }

  delete(username:string): Observable<Utente[]> {
    const params = new HttpParams()
      .set('username', username);

    return this.http.get(`${this.buildURL("GestioneUtenti/delete")}`, { params: params })
      .pipe(map(res => {
        console.log('delete effettuato');
        console.log(res);
        const filteredutenti =this.utenti = this.utenti.filter(item => item.username !== username);    
        return this.utenti = filteredutenti;
      }),
      catchError(this.handleError));
  }


}
