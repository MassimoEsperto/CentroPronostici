import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { HttpSenderService } from './http-sender-service';
import { Competizione } from '../classi/model/competizione';

@Injectable({
  providedIn: 'root'
})
export class OrganizzaService  extends HttpSenderService {

  constructor(private http: HttpClient) { super(); }


  getCompetizioni() {

    return this.http.get<any>(`${this.buildURL("OrganizzaCompetizioni/getCompetizioni")}`,this.myheaders)
      .pipe(map((res) => {
        return res['data'];

      }),
        catchError(this.handleError));
  }

  insertCompetizioni(competizione: Competizione) {
    
    return this.http.put(`${this.buildURL("OrganizzaCompetizioni/setCompetizione")}`, { data: competizione },this.myheaders)
      .pipe(map((res) => {
        return res['data'];
      }),
        catchError(this.handleError));
  }

  updCompetizione(competizione: Competizione) {

    return this.http.put(`${this.buildURL("OrganizzaCompetizioni/updCompetizione")}`, { data: competizione },this.myheaders)
      .pipe(map((res) => {
        return res['data'];
      }),
        catchError(this.handleError));
  }
}
