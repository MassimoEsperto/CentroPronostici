import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/classi/model/utente';
import { GestioneUtenteService } from 'src/app/services/gestione-utente.service';
import { Router } from '@angular/router';
import { Generale } from 'src/app/classi/utils/general-component';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent extends Generale implements OnInit {

  newUtente: Utente = new Utente('', '', 2, '');

  utenti: Utente[];
  esistente: Boolean;

  constructor(private utenteService: GestioneUtenteService, private router: Router) {
    super();
  }

  ngOnInit() {
    this.getUtenti();
  }

  //crud method

  getUtenti(): void {
    this.utenteService.getAll().subscribe(
      (res: Utente[]) => {

        this.utenti = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  registrati(newUtente) {
    //verifica le validazioni
    this.resetErrors();
    this.newUtente = newUtente.value;

    this.validate(this.newUtente.username);
    if (this.esistente) {
      this.error = 'Username già esistente';
      return;
    }

    this.newUtente.ruolo = 3;//ruolo di partenza


    this.utenteService.insert(this.newUtente)
      .subscribe(
        (res: Utente[]) => {

          this.utenti = res; // Update the list of utenti       
          this.successo(); // Inform the user      
          newUtente.reset(); // Reset the form
        },
        (err) => this.error = err
      );
  }

  validate(username: string) {

    this.esistente = false;
    //verifica se l'username è gia presente
    for (let ut of this.utenti) {
      if (ut.username == username) {
        this.esistente = true;
      }
    }
  }


  navigateToHome() {
    this.router.navigate(['/login'])
  }

}