import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Token } from 'src/app/classi/model/token';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { SFONDO_HOME } from 'src/app/classi/utils/costanti';

@Component({
  selector: 'app-recupera-password',
  templateUrl: './recupera-password.component.html',
  styleUrls: ['./recupera-password.component.css']
})
export class RecuperaPasswordComponent implements AfterViewInit {

  utente: Token;
  error = '';
  success='';

  constructor(private service: AuthService, private router: Router,private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = SFONDO_HOME
  }

  ngOnInit() {}

  /**
   * 
   * @param loggami effettivo loggin
   */
  recupera(loggami) {

    let usr = loggami.value;
    loggami.reset(); // Reset the form

    this.service.recuperaPass(usr.username, usr.email)
      .subscribe({

        next: (result: any) => {
          this.success='email con password inviata al tuo indirizzo';
        },
        error: (error: any) => {

          // Stampa messaggio d'errore
          this.error = 'Username o email non valide'

        }
      })

  }

  navigateToHome() {
    this.router.navigate(['/login'])
  }

}

