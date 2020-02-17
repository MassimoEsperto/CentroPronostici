import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { User } from 'src/app/classi/model/user';
import { HttpSenderService } from './http-sender-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends HttpSenderService {
  users: User[];
  /**
   * Costruttore
   * @param http Servizio richieste HTTP
   */
  constructor(private  http: HttpClient, private route: Router) {
    super();
  }

  /**
   * Login
   * @param username Username
   * @param password Password
   */
  login(username:string,pass: string){
    const params = new HttpParams()
    .set('user', username).set('pass', pass);
   console.log('call servizio di login');
    return this.http.get<User[]>(`${this.buildURL("GestioneLogin/login")}`, { params: params  })
    .pipe(map((res) => {
      if('negato'==res['data'])
      {
        console.log('negato');
        return null;
      }
      console.log('ritorno');
      console.log(res['data']);
      this.users = res['data'];
      console.log('return:');
      console.log(this.users[0]);
      return this.users[0];
  
    }),
    catchError(this.handleError));
}




  /**
   * Effettua il logout
   */
  logout(): void {

    localStorage.removeItem("tk-user");

  }
  
  /**
   * Verifica se l'utente è loggato
   */
  isLogged(): boolean {

    let token = localStorage.getItem("tk-user")
    console.log("token",token);
    let route = this.route.url

    // Ritorna true se il token è presente nella sessione

    return !!token

  }

  setLogged(tkuser :any){

    localStorage.setItem('tk-user', tkuser);
    
  }
 


}