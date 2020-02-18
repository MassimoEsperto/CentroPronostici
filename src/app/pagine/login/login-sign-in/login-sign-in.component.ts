import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classi/model/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-sign-in',
  templateUrl: './login-sign-in.component.html',
  styleUrls: ['./login-sign-in.component.css']
})
export class LoginSignInComponent implements OnInit {

  utente: User;
  error = '';
  isPresente: boolean;

  constructor(private router: Router, private service: AuthService) { }

  ngOnInit() {
    this.isPresente = true;
  }

  /**
   * 
   * @param loggami effettivo loggin
   */
  login(loggami) {

    let usr = loggami.value;

    this.service.login(usr.username, usr.password)
      .subscribe({

        next: (result: any) => {
          this.utente = result;

          if (null != this.utente) {
            this.service.setLogged(JSON.stringify(this.utente));
            this.router.navigate(['/home/dashboard']);
          }
          else {
            this.isPresente = false;
          }
        },
        error: (error: any) => {

          // Stampa messaggio d'errore
          this.error = error

        }
      })

  }



}
