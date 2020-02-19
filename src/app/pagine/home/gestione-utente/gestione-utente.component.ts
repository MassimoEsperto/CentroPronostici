import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/classi/model/utente';
import { GestioneUtenteService } from 'src/app/services/gestione-utente.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CalendarioService } from 'src/app/services/calendario.service';
import { Calendario } from 'src/app/classi/model/calendario';
import { SUCCESS } from 'src/app/classi/utils/costanti';
import { ScommesseAntepost } from 'src/app/classi/model/scommesse-antepost';
import { ComboService } from 'src/app/services/combo.service';
import { Combo } from 'src/app/classi/model/combo';

@Component({
  selector: 'app-gestione-utente',
  templateUrl: './gestione-utente.component.html',
  styleUrls: ['./gestione-utente.component.css']
})

export class GestioneComponent implements OnInit {
  utenti: Utente[];
  partite: Calendario[];
  altreScommesse: ScommesseAntepost[];
  error = '';
  success = '';
  newBomber = '';
  totale:number=0;
  options:boolean;
  options2:boolean;
  loading:boolean=true;
  newUtente:Utente = new Utente('', '',0,'password');
  newMatch:Calendario=new Calendario(1,'',null,0,0,'','','','','','','');
  newAltreScommesse:ScommesseAntepost=new ScommesseAntepost(1,'','');
  combosel:Combo;
  
  
  constructor(
    private utenteService: GestioneUtenteService,
    private calendarioService: CalendarioService,
    private combo: ComboService) {}

  ngOnInit() {
    this.getUtenti();
    this.getCalendario();
    this.getAltrescommesse();
    this.getCombo();
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
    this.newMatch.id_partita=match.id_partita;
    this.newMatch.partita=match.partita;
    this.newMatch.goalc=match.goalc;
    this.newMatch.goalt=match.goalt;
  }

  onEditScommesseAntepost(scommesse){
    this.newAltreScommesse.id_partita=scommesse.id_partita;
    this.newAltreScommesse.scommessa=scommesse.scommessa;
    this.newAltreScommesse.risultato=scommesse.risultato;
  }


//crud calendario
getCalendario(): void {
  this.calendarioService.getAll().subscribe(
    (res: Calendario[]) => {
     
      this.partite = res;
    },
    (err) => {
      this.error = err;
    }
  );
}

getAltrescommesse(): void{

 this.calendarioService.getScommesseAntepost()
 .subscribe({

  next: (result: ScommesseAntepost[]) => {
   
 
    this.altreScommesse=result;
    console.log("altre piena", this.altreScommesse)
  },
  error: (error: any) => {

    // Stampa messaggio d'errore
    this.error = error

  }
})

}

onUpdateMatch(newMatch){
  this.resetErrors();
  this.newMatch=newMatch;

  let golc:number=this.newMatch.goalc;
  let golt:number=this.newMatch.goalt;
  let goltot=Number(golc)+Number(golt);

  this.newMatch.risEsatto=golc+'-'+golt;
  if(golc==golt)
  {
    this.newMatch.risultato='X';
    this.newMatch.doppiachance1='1X';
    this.newMatch.doppiachance2='X2';
  }
  else if(golc>golt)
  {
    this.newMatch.risultato='1';
    this.newMatch.doppiachance1='1X';
    this.newMatch.doppiachance2='12';
  }
  else if(golc<golt)
  {
    this.newMatch.risultato='2';
    this.newMatch.doppiachance1='X2';
    this.newMatch.doppiachance2='12';
  }

  this.newMatch.underOver=goltot>2?'OVER':'UNDER';

  this.newMatch.pariDispari=goltot%2===1?'DISPARI':'PARI';

  this.newMatch.golNogol=golc>0&&golt>0?'GOL':'NOGOL';

 


  this.calendarioService.update({ 
    id_partita: this.newMatch.id_partita, 
    partita: this.newMatch.partita,
    data:null, 
    goalc: this.newMatch.goalc, 
    goalt:this.newMatch.goalt,
    risultato:this.newMatch.risultato,
    doppiachance1:this.newMatch.doppiachance1,
    doppiachance2:this.newMatch.doppiachance2,
    underOver:this.newMatch.underOver,
    risEsatto:this.newMatch.risEsatto,
    pariDispari:this.newMatch.pariDispari,
    golNogol:this.newMatch.golNogol
    })
    .subscribe({
 
      next: (result: Calendario[]) => { 
     
        console.log('ritorno updaTE:'+this.newMatch.partita);
        console.log(result);
        this.partite = result;
        this.successo();
      },
      error: (error: any) => {
    
        // Stampa messaggio d'errore
        this.error = error
    
      }
    })

}

//update delle scommesse antepost
updateScommesseAntepost(newScommessa){
  this.newAltreScommesse=newScommessa;
  this.resetErrors();

  this.calendarioService.updateScommesseAntepost({ 
    id_partita: this.newAltreScommesse.id_partita, 
    scommessa: this.newAltreScommesse.scommessa, 
    risultato:this.newAltreScommesse.risultato 
  })
  .subscribe({
 
   next: (result: ScommesseAntepost[]) => { 
  
     this.altreScommesse=result;
     this.successo();
   },
   error: (error: any) => {
 
     // Stampa messaggio d'errore
     this.error = error
 
   }
 })
 
 }

 getCombo(){

  this.combo.getCombo()
  .subscribe({
 
   next: (result: Combo) => {
     this.combosel=result;
   },
   error: (error: any) => {
 
     // Stampa messaggio d'errore
     this.error = error
 
   }
 })
 
 }



  //crud method Utenti

  getUtenti(): void {
    this.utenteService.getAll().subscribe(
      (res: Utente[]) => {
    
        this.utenti = res;
        this.totale=this.utenti.length;
        this.loading=false;
      },
      (err) => {
        this.error = err;
      }
    );
  }
  
  onAddUtente(newUtente){

    this.newUtente=newUtente.value;
    this.newUtente.password='password';
   
    this.resetErrors();
  
    this.utenteService.insert(this.newUtente)
    .subscribe(
      (res: Utente[]) => {
        
        this.utenti = res; // Update the list of utenti       
        this.totale=this.utenti.length; 
        this.successo();
           
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
        this.successo();
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
          this.options2=false;
          this.successo();
        },
        (err) => this.error = err
      );
  }

  getItemsGirone(gir:string) {
    let girone='A';
    if(null!=gir)
    {
      let lung=gir.length;
      girone=gir.substring(lung-1,lung);
  }
    return this.combosel.squadre.filter((item) => item.girone == girone);
  }



  onAddBomber(bomber:string){

    this.resetErrors();

    this.calendarioService.insertBomber(bomber)
    .subscribe({
  
    next: (result: string) => { 

        this.combosel.cannonieri.push(result);
        this.newBomber='';

    },
    error: (error: any) => {
  
      // Stampa messaggio d'errore
      this.error = error
  
    }
  })
  }

  onDeleteBomber(bomber:string){

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
  
      // Stampa messaggio d'errore
      this.error = error
  
    }
  })
  }

getRuoloStrng(rol)
{
  switch(rol) { 
    case "1": { 
       return"ADMIN" 
       break; 
    } 
    case "2": { 
      return "PLAYER"; 
       break; 
    } 
    case "3": { 
      return "VISITATORE"; 
      break; 
   } 
    default: { 
      return "VISITATORE"; 
       break; 
    } 
 } 
}

successo(){
  this.success = SUCCESS;
  setTimeout(() => {
    this.success = '';
  }, 5000);

}



}