import { Injectable } from '@angular/core';
import { HttpSenderService } from './http-sender-service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Partita } from '../classi/model/partita';


@Injectable({
  providedIn: 'root'
})
export class CreaCompetizioneService extends HttpSenderService {

  constructor(private http: HttpClient) {
    super();
   }


   /*----------------- BOMBER -----------------*/
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

  /*----------------- SQUADRA -----------------*/
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


  /*----------------- CALENDARIO -----------------*/
  getCalendario(): Observable<any> {

   return this.http.get(`${this.buildURL("CreaCompetizione/getPartite")}`)
      .pipe(map((res) => {
     
        return res['data']
      }),
      catchError(this.handleError));
  }

  deletePartita(id: string): Observable<string> {
   
    const params = new HttpParams().set('id_evento', id);

   return this.http.get(`${this.buildURL("CreaCompetizione/delPartita")}`, { params: params })
      .pipe(map((res) => {
       
        let element=(res['data'].id_evento);
       
        return element;
      }),
      catchError(this.handleError));
  }

  
  setPartita(partita: Partita): Observable<Partita[]> {

    return this.http.post(`${this.buildURL("CreaCompetizione/setPartita")}`, { data: partita })
       .pipe(map((res) => {
         return res['data'];
       }),
       catchError(this.handleError));
   }
 
   updPartita(partita: Partita): Observable<Partita[]> {

    return this.http.post(`${this.buildURL("CreaCompetizione/updPartita")}`, { data: partita })
       .pipe(map((res) => {
         return res['data'];
       }),
       catchError(this.handleError));
   }

   /*----------------- PUNTI PREVISTI -----------------*/
   getPuntiPrevisti(): Observable<any> {

    return this.http.get(`${this.buildURL("CreaCompetizione/getPuntiPrevisti")}`)
       .pipe(map((res) => {
      
         return res['data']
       }),
       catchError(this.handleError));
   }

   updPuntiPrevisti(id_punti: string,valore: string): Observable<string> {
    
    const params = new HttpParams().set('id_punti', id_punti).set('valore', valore);

   return this.http.get(`${this.buildURL("CreaCompetizione/updPuntiPrevisti")}`, { params: params })
      .pipe(map((res) => {
       
        return res['data'];
      }),
      catchError(this.handleError));
  }

   /*----------------- GIRONI -----------------*/
   getAntepostGironi(): Observable<any> {

    return this.http.get(`${this.buildURL("CreaCompetizione/getAntepostGironi")}`)
       .pipe(map((res) => {
      
         return res['data']
       }),
       catchError(this.handleError));
   }

   setGirone(girone: string): Observable<string> {
    
    const params = new HttpParams().set('girone', girone);

   return this.http.get(`${this.buildURL("CreaCompetizione/setAntepostGironi")}`, { params: params })
      .pipe(map((res) => {
       
        return res['data'];
      }),
      catchError(this.handleError));
  }

  delGirone(girone: string): Observable<string> {
    
    const params = new HttpParams().set('girone', girone);

   return this.http.get(`${this.buildURL("CreaCompetizione/delAntepostGironi")}`, { params: params })
      .pipe(map((res) => {
       
        return res['data'];
      }),
      catchError(this.handleError));
  }

 
}
