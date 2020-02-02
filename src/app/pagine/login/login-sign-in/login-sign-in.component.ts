import { SUCCESS } from './../../../classi/utils/costanti';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classi/model/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-sign-in',
  templateUrl: './login-sign-in.component.html',
  styleUrls: ['../../../../assets/css/styles_login.css']
})
export class LoginSignInComponent implements OnInit {

  username:string;
  password:string;
  utente:User;
  error = '';
  success = '';
  isPresente:boolean;

  constructor(private router: Router,private service: AuthService) { }

  ngOnInit() {
    this.isPresente=true;
  }


  LoginUser(){
    console.log("esername: "+this.username);
    console.log("PASSWORD: "+this.password);
  
   this.service.login(this.username,this.password).subscribe(
     (result: any) =>{
       this.utente=result;
       console.log('risultato finale:'+result);
       console.log('risultato finale:'+JSON.stringify(result));
       console.log('risultato finale:'+this.utente);
        if(null!=this.utente)
        {
          this.success = SUCCESS;         
          this.service.setLogged(JSON.stringify(this.utente));
          this.router.navigate(['/home/dashboard']);
        }
        else
        {
          this.isPresente=false;
        }
      },
      (err) => {this.error = err,  console.log(this.error) }
    );
 

  }
 
}
