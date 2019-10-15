import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {}

  getLogin(username:string,pass: string)
  {
    let miaUrl:string="https://messomale.000webhostapp.com/service/login.php";
    
  //  return this.http.post<User[]>(miaUrl, { data: username,pass },);
    //bisogna passare i parametri
   return this.http.get<User[]>(miaUrl);
  
  }
}
