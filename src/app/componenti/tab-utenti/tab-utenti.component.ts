import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/classi/model/utente';
import { GestioneUtenteService } from 'src/app/services/gestione-utente.service';
import { Generale } from 'src/app/classi/utils/general-component';


@Component({
  selector: 'tab-utenti',
  templateUrl: './tab-utenti.component.html',
  styleUrls: ['./tab-utenti.component.css']
})
export class TabUtentiComponent extends Generale implements OnInit {
  utenti: Utente[];

  totale: number = 0;
  options2: boolean;

  newUtente: Utente = new Utente('', '', '', '','0','', 'password', 0);


  constructor(
    private utenteService: GestioneUtenteService) { super() }

  ngOnInit() {
    this.getUtenti();
  }

  //metodi edit
  onEditUser(newUser) {
    this.newUtente.email = newUser.email;
    this.newUtente.cellulare = newUser.cellulare;
    this.newUtente.ruolo = newUser.ruolo;
    this.newUtente.username = newUser.username;
    this.newUtente.versato = newUser.versato || 0;
    this.options2 = true;
  }



  //crud method Utenti
  getUtenti() {
    this.resetErrors();
    this.utenteService.getUtenti()
      .subscribe({

        next: (result: Utente[]) => {

          this.utenti = result;
          this.totale = this.utenti.length;
          this.loading = false;
          this.options2 = false;

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }


  onDelete(user: Utente) {
    this.resetErrors();
    this.utenteService.delete(user.username)
      .subscribe({

        next: (result: any) => {

          this.getUtenti()
          this.successo();

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }

  onDeleteUtente(){
    this.onDelete(this.newUtente);
  }


  onUpdateUtente(newUtente) {
    this.newUtente = newUtente;
    this.resetErrors();

    this.utenteService.update({
      username: this.newUtente.username,
      nome:'',
      cognome:'',
      email: this.newUtente.email,
      cellulare: this.newUtente.cellulare,
      ruolo: this.newUtente.ruolo,
      password: '',
      versato: this.newUtente.versato,
      schede: this.newUtente.schede
    })

      .subscribe({

        next: (result: any) => {

          this.getUtenti();
          this.successo();

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }



}