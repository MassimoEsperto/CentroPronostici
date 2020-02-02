import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/classi/model/utente';
import { GestioneService } from 'src/app/services/gestione.service';
import { SUCCESS } from 'src/app/classi/utils/costanti';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  newUtente:Utente = new Utente('', '',2,'');
  error = '';
  success = '';
  utenti: Utente[];
  esistente:Boolean;
  
  constructor(private utenteService: GestioneService) {}

  ngOnInit() {
    this.getUtenti();
  }

    //crud method

    getUtenti(): void {
      this.utenteService.getAll().subscribe(
        (res: Utente[]) => {
          console.log(res);
          this.utenti = res;
        },
        (err) => {
          this.error = err;
        }
      );
    }

  registrati(newUtente){
    //verifica le validazioni
    this.resetErrors();
    this.newUtente=newUtente.value;

    this.validate(this.newUtente.username);
    if(this.esistente)
    {
      this.error = 'Username già esistente';
      return;
    }

    this.newUtente.ruolo=2;
    console.log(this.newUtente);
   
  
    this.utenteService.insert(this.newUtente)
    .subscribe(
      (res: Utente[]) => {
        
        this.utenti = res; // Update the list of utenti       
        this.success = SUCCESS; // Inform the user      
        newUtente.reset(); // Reset the form
      },
      (err) => this.error = err
    );
  }

  validate(username:string){
    
    this.esistente=false;
    //verifica se l'username è gia presente
    for(let ut of this.utenti){
        if(ut.username==username)
        {
          this.esistente=true;
        }
    }
  }

  private resetErrors(){
    this.success = '';
    this.error   = '';
  }
}
