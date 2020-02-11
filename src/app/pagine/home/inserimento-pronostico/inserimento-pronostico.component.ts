import { Component, OnInit } from '@angular/core';
import { GestionePronosticiService } from 'src/app/services/gestione-pronostici.service';
import { SUCCESS } from 'src/app/classi/utils/costanti';
import { Schedina } from 'src/app/classi/model/schedina';
import { ClrLoadingState } from '@clr/angular';
import { ComboService } from 'src/app/services/combo.service';
import { Combo } from 'src/app/classi/model/combo';

@Component({
  selector: 'app-inserimento-pronostico',
  templateUrl: './inserimento-pronostico.component.html',
  styleUrls: ['./inserimento-pronostico.component.css']
})
export class InserimentoPronosticoComponent implements OnInit {

  constructor(private service: GestionePronosticiService,private combo: ComboService) { }
  schede:Schedina[];
  play:boolean=false;
  loading:boolean=false;
  error = '';
  success = '';
  partita_sel:Schedina //la partita che viene selezionata
  id_schedina:number;
  submitBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  combosel:Combo;
  
  ngOnInit() {
    this.getCombo();
  }

  nuovaScheda(){
    this.resetErrors();
    this.loading=true;
    let username=this.service.username();

    this.service.newSchedina(username)    
    .subscribe({
  
      next: (res: number) => {
  
        console.log("res",res);
        this.id_schedina = res;   
        this.getSchedinaVuota();
        this.play=true;
       
       
      },
      error: (error: any) => {
  
        // Stampa messaggio d'errore
        this.error = error
  
      }
    })
  
  }

  inserisciFormSubmit() {
    this.submitBtnState = ClrLoadingState.LOADING;
    
this.service.insert(this.schede)
.subscribe({
   
     next: (result: string) => {
    
    setTimeout(() => {
      console.log("oooooooooooooooooo");
       if(result=="OK"){
        this.success = SUCCESS; 
        this.play=false;
       }
       this.submitBtnState = ClrLoadingState.DEFAULT;
  }, 10000);


     },
     error: (error: any) => {
 
       // Stampa messaggio d'errore
       this.error = error
 
     }
   })


  }

  getSchedinaVuota(){
    let username=this.service.username();

   this.service.schedinaVuota(this.id_schedina ,username)
   .subscribe({
  
    next: (result: Schedina[]) => {
     
      this.schede=result;
      this.loading=false;
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
   console.log("combo:",this.combosel.cannonieri);
  },
  error: (error: any) => {

    // Stampa messaggio d'errore
    this.error = error

  }
})

}

  
  private resetErrors(){
    this.success = '';
    this.error   = '';
  }
/**
 * 
 * @param indice 
 * in base alla partita selezionata compila il modal
 */
  onEditMatch(indice){
    this.partita_sel=this.schede[indice];
   //da verificare..  this.schede[indice].tipo=1;//indica che si tratta della parte delle scommesse riguardanti i risultati
  }
  onUpdateMatch(match){
  }

  getItemsGirone(gir:string) {
    let lung=gir.length;
    let girone=gir.substring(lung-1,lung);
   
    return this.combosel.squadre.filter((item) => item.girone == girone);
  }
 
}
