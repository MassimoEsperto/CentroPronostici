import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Schedina } from '../classi/model/schedina';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpSenderService } from './http-sender-service';

@Injectable({
  providedIn: 'root'
})
export class InserimentoService extends HttpSenderService {

  scheda: Schedina[];
  constructor(private http:HttpClient) {super();}


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




  schedinaVuota(id_schedina:number,username: string){
    const params = new HttpParams()
    .set('id_schedina', id_schedina.toString()).set('username', username);
   console.log('schedina vuota');
    return this.http.get<Schedina[]>(`${this.buildURL("GestioneSchedina/schedinaVuota")}`, { params: params  })
    .pipe(map((res) => {
      console.log('ritorno schedina');
      this.scheda = res['data'];
      return this.scheda;
  
    }),
    catchError(this.handleError));
}



}
