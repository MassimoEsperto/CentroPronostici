import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Utente } from 'src/app/classi/model/utente';
import { GestioneUtenteService } from 'src/app/services/gestione-utente.service';
import { Router } from '@angular/router';
import { Generale } from 'src/app/classi/utils/general-component';
import { Ruolo } from 'src/app/classi/utils/enums';
import { SFONDO_HOME } from 'src/app/classi/utils/costanti';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent extends Generale implements AfterViewInit {

  newUtente: Utente = new Utente('', '', '', '','0','', '',0);

  utenti: Utente[];
  esistente: Boolean;
  loadingg:boolean=false;

  constructor(private utenteService: GestioneUtenteService,private elementRef: ElementRef, private router: Router) {
    super();
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = SFONDO_HOME
  }

  ngOnInit() {
    this.getUtenti();
  }

  //crud method

  getUtenti(): void {
    this.utenteService.getUtenti().subscribe(
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
    this.loadingg=true;

    this.validate(this.newUtente.username);
    if (this.esistente) {
      this.error = 'Username già esistente';
      this.loadingg=false;
      return;
    }

    this.newUtente.ruolo = Ruolo.VISITATORE;//ruolo di partenza


    this.utenteService.insert(this.newUtente)
      .subscribe(
        (res: Utente[]) => {
          this.loadingg=false;
          this.utenti = res; // Update the list of utenti       
          this.successo(); // Inform the user      
          newUtente.reset(); // Reset the form
        },
        (err) => {this.error = err
          this.loadingg=false
        }
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