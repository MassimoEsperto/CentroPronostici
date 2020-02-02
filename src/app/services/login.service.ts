import { User } from '../classi/model/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpSenderService } from './http-sender-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends HttpSenderService {
  baseUrl = 'http://marescafantaeuropeo.altervista.org/webServices';
  users: User[];
  constructor(private http:HttpClient) {super();}

 

  login(username:string,pass: string){
    const params = new HttpParams()
    .set('user', username).set('pass', pass);
   console.log('call servizio di login');
    return this.http.get<User[]>(`${this.baseUrl}/login.php`, { params: params  })
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

  

}
