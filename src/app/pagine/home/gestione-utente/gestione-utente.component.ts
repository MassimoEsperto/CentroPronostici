import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/classi/model/utente';
import { GestioneUtenteService } from 'src/app/services/gestione-utente.service';
import { CalendarioService } from 'src/app/services/calendario.service';
import { Calendario } from 'src/app/classi/model/calendario';
import { ScommesseAntepost } from 'src/app/classi/model/scommesse-antepost';
import { ComboService } from 'src/app/services/combo.service';
import { Combo } from 'src/app/classi/model/combo';
import { Generale } from 'src/app/classi/utils/general-component';
import { risultato } from 'src/app/classi/utils/enums';

@Component({
  selector: 'app-gestione-utente',
  templateUrl: './gestione-utente.component.html',
  styleUrls: ['./gestione-utente.component.css']
})

export class GestioneComponent extends Generale implements OnInit {
  utenti: Utente[];
  partite: Calendario[];
  altreScommesse: ScommesseAntepost[];

  newBomber = '';
  totale: number = 0;
  options: boolean;
  options2: boolean;

  newUtente: Utente = new Utente('', '', '', 'password');
  newMatch: Calendario = new Calendario(1, '', null, 0, 0, '', '', '', '', '', '', '');
  newAltreScommesse: ScommesseAntepost = new ScommesseAntepost(1, '', '');
  combosel: Combo;


  constructor(
    private utenteService: GestioneUtenteService,
    private calendarioService: CalendarioService,
    private combo: ComboService) { super() }

  ngOnInit() {
    this.getUtenti();
    this.getCalendario();
    this.getScommesseAntepost();
    this.getCombo();
  }

  //metodi edit
  onEditUser(newUser) {
    this.newUtente.email = newUser.email;
    this.newUtente.ruolo = newUser.ruolo;
    this.newUtente.username = newUser.username;
    this.options2 = true;
  }

  onEditMatch(match) {
    this.newMatch.id_partita = match.id_partita;
    this.newMatch.partita = match.partita;
    this.newMatch.goalc = match.goalc;
    this.newMatch.goalt = match.goalt;
  }

  onEditScommesseAntepost(scommesse) {
    this.newAltreScommesse.id_partita = scommesse.id_partita;
    this.newAltreScommesse.scommessa = scommesse.scommessa;
    this.newAltreScommesse.risultato = scommesse.risultato;
  }


  getCalendario() {

    this.calendarioService.getAll()
      .subscribe({

        next: (result: Calendario[]) => {

          this.partite = result;

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })

  }

  getScommesseAntepost() {

    this.calendarioService.getScommesseAntepost()
      .subscribe({

        next: (result: ScommesseAntepost[]) => {

          this.altreScommesse = result;

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })

  }

  onUpdateMatch(newMatch) {
    
    this.resetErrors();
    this.newMatch = newMatch;

    let golc: number = this.newMatch.goalc;
    let golt: number = this.newMatch.goalt;
    let goltot = Number(golc) + Number(golt);

    this.newMatch.risEsatto = golc > 4 || golt > 4 ? risultato.ALTRO : golc + '-' + golt;
    if (golc == golt) {
      this.newMatch.risultato = risultato.X;
      this.newMatch.doppiachance1 = risultato.UNOX;
      this.newMatch.doppiachance2 = risultato.XDUE;
    }
    else if (golc > golt) {
      this.newMatch.risultato = risultato.UNO;
      this.newMatch.doppiachance1 = risultato.UNOX;
      this.newMatch.doppiachance2 = risultato.UNO_DUE;
    }
    else if (golc < golt) {
      this.newMatch.risultato = risultato.DUE;
      this.newMatch.doppiachance1 = risultato.XDUE;
      this.newMatch.doppiachance2 = risultato.UNO_DUE;
    }

    this.newMatch.underOver = goltot > 2 ? risultato.OVER : risultato.UNDER;

    this.newMatch.pariDispari = goltot % 2 === 1 ? risultato.DISPARI : risultato.PARI;

    this.newMatch.golNogol = golc > 0 && golt > 0 ? risultato.GOL : risultato.NOGOL;




    this.calendarioService.update({
      id_partita: this.newMatch.id_partita,
      partita: this.newMatch.partita,
      data: null,
      goalc: this.newMatch.goalc,
      goalt: this.newMatch.goalt,
      risultato: this.newMatch.risultato,
      doppiachance1: this.newMatch.doppiachance1,
      doppiachance2: this.newMatch.doppiachance2,
      underOver: this.newMatch.underOver,
      risEsatto: this.newMatch.risEsatto,
      pariDispari: this.newMatch.pariDispari,
      golNogol: this.newMatch.golNogol
    })
      .subscribe({

        next: (result: Calendario[]) => {

          this.partite = result;
          this.successo();
        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })

  }

  //update delle scommesse antepost
  updateScommesseAntepost(newScommessa) {
    this.newAltreScommesse = newScommessa;
    this.resetErrors();

    this.calendarioService.updateScommesseAntepost({
      id_partita: this.newAltreScommesse.id_partita,
      scommessa: this.newAltreScommesse.scommessa,
      risultato: this.newAltreScommesse.risultato
    })
      .subscribe({

        next: (result: ScommesseAntepost[]) => {

          this.altreScommesse = result;
          this.successo();
        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })

  }

  getCombo() {

    this.combo.getCombo()
      .subscribe({

        next: (result: Combo) => {
          this.combosel = result;
        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })

  }

  getItemsGirone(gir: string) {
    let girone = 'A';
    if (null != gir) {
      let lung = gir.length;
      girone = gir.substring(lung - 1, lung);
    }
    return this.combosel.squadre.filter((item) => item.girone == girone);
  }


  //crud method Utenti
  getUtenti() {
    this.resetErrors();
    this.utenteService.getAll()
      .subscribe({

        next: (result: Utente[]) => {

          this.utenti = result;
          this.totale = this.utenti.length;
          this.loading = false;

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

        next: (result: Utente[]) => {

          this.utenti = result;
          this.totale = this.utenti.length;
          this.successo();

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }


  onUpdateUtente(newUtente) {
    this.newUtente = newUtente;
    this.resetErrors();

    this.utenteService.update({ username: this.newUtente.username, email: this.newUtente.email, ruolo: this.newUtente.ruolo, password: '' })
      .subscribe({

        next: (result: any) => {

          this.utenti = result;
          this.options2 = false;
          this.successo();

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }




  //CRUD CAPOCANNONIERE
  onAddBomber(bomber: string) {

    this.resetErrors();

    this.calendarioService.insertBomber(bomber)
      .subscribe({

        next: (result: string) => {

          this.combosel.cannonieri.push(result);
          this.newBomber = '';

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }

  onDeleteBomber(bomber: string) {

    this.resetErrors();

    this.calendarioService.deleteBomber(bomber)
      .subscribe({

        next: (result: string) => {

          const index: number = this.combosel.cannonieri.indexOf(result);
          if (index !== -1) {
            this.combosel.cannonieri.splice(index, 1);
          }


        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }





}