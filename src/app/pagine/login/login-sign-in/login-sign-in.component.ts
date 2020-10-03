import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from 'src/app/classi/model/token';
import { SFONDO_HOME } from 'src/app/classi/utils/costanti';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-sign-in',
  templateUrl: './login-sign-in.component.html',
  styleUrls: ['./login-sign-in.component.css']
})
export class LoginSignInComponent implements AfterViewInit {

  utente: Token;
  error = '';
  isPresente: boolean;

  constructor(private router: Router, private service: AuthService, private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = SFONDO_HOME
  }
  
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
            this.utente.scadenza = this.scadenza().toString();

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

  scadenza() {
    let primaDate = new Date();
    primaDate.setHours(primaDate.getHours() + 2);

    return primaDate;
  }

}
