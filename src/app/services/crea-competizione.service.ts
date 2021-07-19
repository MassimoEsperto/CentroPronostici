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
  insertBomber(bomber: string) {

    let payload={nome:bomber}

    return this.http.post(`${this.buildURL("CreaCompetizione/setBomber")}`, { data: payload },this.myheaders)
       .pipe(map((res) => {
        let cannoniere=(res['data'].nome);
       
        return cannoniere;
       }),
       catchError(this.handleError));
   }

  deleteBomber(bomber: string): Observable<string> {
   
    const params = new HttpParams().set('nome', bomber);

   return this.http.get(`${this.buildURL("CreaCompetizione/delBomber")}`, { params: params, headers: this.myheaders.headers })
      .pipe(map((res) => {
       
        let cannoniere=(res['data'].nome);
       
        return cannoniere;
      }),
      catchError(this.handleError));
  }

  /*----------------- SQUADRA -----------------*/
  insertSquadra(nome: string,girone: string) {

    let payload={nome:nome,girone:girone}

    return this.http.post(`${this.buildURL("CreaCompetizione/setSquadra")}`, { data: payload },this.myheaders)
       .pipe(map((res) => {     
        return payload;
       }),
       catchError(this.handleError));
   }

  deleteSquadra(nome: string): Observable<string> {
   
    const params = new HttpParams().set('nome', nome);

   return this.http.get(`${this.buildURL("CreaCompetizione/delSquadra")}`, { params: params, headers: this.myheaders.headers })
      .pipe(map((res) => {
       
        let element=(res['data'].nome);
       
        return element;
      }),
      catchError(this.handleError));
  }


  /*----------------- CALENDARIO -----------------*/
  getCalendario(): Observable<any> {

   return this.http.get(`${this.buildURL("CreaCompetizione/getPartite")}`,this.myheaders)
      .pipe(map((res) => {
     
        return res['data']
      }),
      catchError(this.handleError));
  }

  deletePartita(id: string): Observable<string> {
   
    const params = new HttpParams().set('id_evento', id);

   return this.http.get(`${this.buildURL("CreaCompetizione/delPartita")}`, { params: params, headers: this.myheaders.headers })
      .pipe(map((res) => {
       
        let element=(res['data'].id_evento);
       
        return element;
      }),
      catchError(this.handleError));
  }

  
  setPartita(partita: Partita): Observable<Partita[]> {

    return this.http.post(`${this.buildURL("CreaCompetizione/setPartita")}`, { data: partita },this.myheaders)
       .pipe(map((res) => {
         return res['data'];
       }),
       catchError(this.handleError));
   }
 
   updPartita(partita: Partita): Observable<Partita[]> {

    return this.http.post(`${this.buildURL("CreaCompetizione/updPartita")}`, { data: partita },this.myheaders)
       .pipe(map((res) => {
         return res['data'];
       }),
       catchError(this.handleError));
   }

   /*----------------- PUNTI PREVISTI -----------------*/
   getPuntiPrevisti(): Observable<any> {

    return this.http.get(`${this.buildURL("CreaCompetizione/getPuntiPrevisti")}`,this.myheaders)
       .pipe(map((res) => {
      
         return res['data']
       }),
       catchError(this.handleError));
   }

   updPuntiPrevisti(id_punti: string,valore: string): Observable<string> {
    
    const params = new HttpParams().set('id_punti', id_punti).set('valore', valore);

   return this.http.get(`${this.buildURL("CreaCompetizione/updPuntiPrevisti")}`, { params: params, headers: this.myheaders.headers })
      .pipe(map((res) => {
       
        return res['data'];
      }),
      catchError(this.handleError));
  }

   /*----------------- GIRONI -----------------*/
   getAntepostGironi(): Observable<any> {

    return this.http.get(`${this.buildURL("CreaCompetizione/getAntepostGironi")}`,this.myheaders)
       .pipe(map((res) => {
      
         return res['data']
       }),
       catchError(this.handleError));
   }

   setGirone(girone: string): Observable<string> {
    
    const params = new HttpParams().set('girone', girone);

   return this.http.get(`${this.buildURL("CreaCompetizione/setAntepostGironi")}`, { params: params, headers: this.myheaders.headers })
      .pipe(map((res) => {
       
        return res['data'];
      }),
      catchError(this.handleError));
  }

  delGirone(girone: string): Observable<string> {
    
    const params = new HttpParams().set('girone', girone);

   return this.http.get(`${this.buildURL("CreaCompetizione/delAntepostGironi")}`, { params: params, headers: this.myheaders.headers })
      .pipe(map((res) => {
       
        return res['data'];
      }),
      catchError(this.handleError));
  }


  getAllSchede(): Observable<any> {

    return this.http.get(`${this.buildURL("CreaCompetizione/getAllSchede")}`,this.myheaders)
       .pipe(map((res) => {
      
         return res['data']
       }),
       catchError(this.handleError));
   }
 
}
