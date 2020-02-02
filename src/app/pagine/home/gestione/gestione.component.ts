import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/classi/model/utente';
import { GestioneService } from 'src/app/services/gestione.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CalendarioService } from 'src/app/services/calendario.service';
import { Calendario } from 'src/app/classi/model/calendario';
import { SUCCESS } from 'src/app/classi/utils/costanti';

@Component({
  selector: 'app-gestione',
  templateUrl: './gestione.component.html',
  styleUrls: ['./gestione.component.css']
})

export class GestioneComponent implements OnInit {
  utenti: Utente[];
  partite: Calendario[];
  error = '';
  success = '';
  totale:number=0;
  options:boolean;
  options2:boolean;

  newUtente:Utente = new Utente('', '',0,'password');
  newMatch:Calendario=new Calendario(1,'',null,0,0);

  
  constructor(private utenteService: GestioneService,private calendarioService: CalendarioService) {}

  ngOnInit() {
    this.getUtenti();
    this.getCalendario();
  }

  private resetErrors(){
    this.success = '';
    this.error   = '';
  }

  onEditUser(newUser){
    this.newUtente.email=newUser.email;
    this.newUtente.ruolo=newUser.ruolo;
    this.newUtente.username=newUser.username;
    this.options2=true;
  }
  
  onEditMatch(match){
    this.newMatch.id_calendario=match.id_calendario;
    this.newMatch.partita=match.partita;
    this.newMatch.goalc=match.goalc;
    this.newMatch.goalt=match.goalt;
  }


//crud calendario
getCalendario(): void {
  this.calendarioService.getAll().subscribe(
    (res: Calendario[]) => {
      console.log(res);
      this.partite = res;
    },
    (err) => {
      this.error = err;
    }
  );
}

onUpdateMatch(newMatch){
  this.newMatch=newMatch;
  console.log('selezionato2: ');
  console.log(this.newMatch);
  this.resetErrors();

  this.calendarioService.update({ id_calendario: this.newMatch.id_calendario, partita: this.newMatch.partita, 
    data:null,goalc: this.newMatch.goalc, goalt:this.newMatch.goalt })
    .subscribe(
      (res) => {
        console.log('ritorno updaTE:'+this.newMatch.partita);
        console.log(res);
        this.partite    = res;
        this.success = SUCCESS;
      },
      (err) => this.error = err
    );
}

  //crud method Utenti

  getUtenti(): void {
    this.utenteService.getAll().subscribe(
      (res: Utente[]) => {
        console.log(res);
        this.utenti = res;
        this.totale=this.utenti.length;
      },
      (err) => {
        this.error = err;
      }
    );
  }
  
  onAddUtente(newUtente){

    this.newUtente=newUtente.value;
    this.newUtente.password='password';
    console.log(this.newUtente);
    this.resetErrors();
  
    this.utenteService.insert(this.newUtente)
    .subscribe(
      (res: Utente[]) => {
        
        this.utenti = res; // Update the list of utenti       
        this.success = SUCCESS; // Inform the user
        this.totale=this.utenti.length; 
           
        newUtente.reset(); // Reset the form
      },
      (err) => this.error = err
    );
  }

  onDelete(user:Utente){
    this.resetErrors();
    this.utenteService.delete(user.username)
    .subscribe(
      (res: Utente[]) => {
        this.utenti = res;
        this.totale=this.utenti.length;
        this.success = SUCCESS;
      },
      (err) => this.error = err
    );
  }

  onUpdateUtente(newUtente){
    this.newUtente=newUtente;
    this.resetErrors();

    this.utenteService.update({ username: this.newUtente.username, email: this.newUtente.email, ruolo: this.newUtente.ruolo,password:'' })
      .subscribe(
        (res) => {
          this.utenti    = res;
          this.success = SUCCESS;
          this.options2=false;
        },
        (err) => this.error = err
      );
  }

}