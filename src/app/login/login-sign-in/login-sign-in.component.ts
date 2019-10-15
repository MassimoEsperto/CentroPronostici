import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-sign-in',
  templateUrl: './login-sign-in.component.html',
  styleUrls: ['../../../assets/css/styles_login.css']
})
export class LoginSignInComponent implements OnInit {

  username:string;
  password:string;
  utente:User;

  constructor(private router: Router,private service: LoginService) { }

  ngOnInit() {
  }


  LoginUser(){
    console.log("esername: "+this.username);
    console.log("PASSWORD: "+this.password);
  
   // this.service.getLogin(this.username,this.password).subscribe((result: any) =>{this.utente=result, console.log(this.utente)});
   this.service.getLogin(this.username,this.password).subscribe((result: any) =>{ console.log(result)});
    
    
    /*

    localStorage.setItem('user', JSON.stringify(this.utente));
    this.router.navigate(['/dashboard']);
*/
  }
}
