import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Schedina } from '../classi/model/schedina';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpSenderService } from './http-sender-service';
import { Pronostici } from '../classi/model/pronostici';

@Injectable({
  providedIn: 'root'
})
export class GestionePronosticiService extends HttpSenderService {

  scheda: Schedina[];
  pronostico:Pronostici[];
  private risultatiClassici = ['1', 'X', '2', '1X', 'X2','OVER','UNDER','GOL','NOGOL','PARI','DISPARI'];
  private risultatiEsatti = ['1-0', '2-0','3-0','4-0','5-0','2-1','3-1','4-1','5-1','3-2','4-2','5-2','4-3','5-3','5-4',
                    '1-1','2-2','3-3','4-4','5-5',
                    '0-1','0-2','0-3','0-4','0-5','1-2','1-3','1-4','1-5','2-3','2-4','2-5','3-4','3-5','4-5'];
                    
  
  constructor(private http:HttpClient) {super();}

/**
 * 
 * @param username 
 * restituisce un id nuovo al quale associare la nuova scheda
 * ogni user avra una lista di id per ogni scommessa giocata
 */
  newSchedina(username:string){
    const params = new HttpParams()
      .set('username', username);

    return this.http.get(`${this.buildURL("GestioneSchedina/newSchedina")}`, { params: params })
    .pipe(map((res) => {
      console.log(res['data']);
      
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
  schedinaVuota(id_schedina:number,username: string){
    const params = new HttpParams()
    .set('id_schedina', id_schedina.toString()).set('username', username);
   console.log('schedina vuota');
    return this.http.get<Schedina[]>(`${this.buildURL("GestioneSchedina/schedinaVuota")}`, { params: params  })
    .pipe(map((res) => {
      console.log('ritorno schedina');
      console.log("res: ",res['data']);
      this.scheda = res['data'];
      return this.scheda;
  
    }),
    catchError(this.handleError));
}

schedinaPiena(id_schedina:number){
  const params = new HttpParams()
  .set('id_schedina', id_schedina.toString());
 console.log('schedina piena');
  return this.http.get<Schedina[]>(`${this.buildURL("GestioneSchedina/schedinaPiena")}`, { params: params  })
  .pipe(map((res) => {
    console.log('ritorno schedina');
    this.scheda = res['data'];
    return this.scheda;

  }),
  catchError(this.handleError));
}

/**
 * 
 * @param pronostico 
 * Inserimento dei pronostici
 */
insert(pronostico: Schedina[]){
  console.log("pronostico",pronostico);
  console.log(JSON.stringify(pronostico));

 return this.http.post(`${this.buildURL("GestionePronostici/insert")}`, { data: pronostico })
    .pipe(map((res) => {
      console.log("ritorno",res['data']);
      return "OK";
    }),
    catchError(this.handleError));
}

/**
 * 
 * @param username 
 * @param pass 
 * restituisce la lista di pronostici associati al tuo user
 */
list(username:string){
  const params = new HttpParams()
  .set('username', username);

  return this.http.get<Pronostici[]>(`${this.buildURL("GestionePronostici/list")}`, { params: params  })
  .pipe(map((res) => {
    console.log("res lista ",res['data']);
    this.pronostico = res['data'];
    return this.pronostico;

  }),
  catchError(this.handleError));
}



getRisultatiClassici() {
  return this.risultatiClassici;
}

getRisultatiEsatti() {
  return this.risultatiEsatti;
}

}
