import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Pronostici } from 'src/app/classi/model/pronostici';
import { GestionePronosticiService } from 'src/app/services/gestione-pronostici.service';
import { Schedina } from 'src/app/classi/model/schedina';
import { SUCCESS } from 'src/app/classi/utils/costanti';
import { ComboService } from 'src/app/services/combo.service';
import { Combo } from 'src/app/classi/model/combo';

@Component({
  selector: 'app-lista-pronostici',
  templateUrl: './lista-pronostici.component.html',
  styleUrls: ['./lista-pronostici.component.css']
})
export class ListaPronosticiComponent implements OnInit {

  constructor(private service: GestionePronosticiService,private combo: ComboService) { }
  pronostico:Pronostici[];
  schede:Schedina[];
  partita_sel:Schedina=new Schedina(0,0,'',0,'','');
  error = '';
  success = '';
  loading:boolean=true;
  bloccato:boolean=true;
 // play:boolean=false;
 
  combosel:Combo;

  
  ngOnInit() {
    this.getVariabile();
    this.getCombo();
  }

  onEditScheda(scheda){
    this.loading=true;
    this.getSchedinaPiena(scheda.id_schedina);
  }

  onDeleteScheda(scheda){
    console.log("scheda da eliminare",scheda);
    this.deleteSchedina(scheda.id_schedina);
  }

  getListSchedine(){
    let username=this.service.username();

   this.service.list(username)
   .subscribe({
  
    next: (result: Pronostici[]) => {

      this.pronostico=result;
      this.loading=false;
  
    },
    error: (error: any) => {

      // Stampa messaggio d'errore
      this.error = error

    }
  })

}

getSchedinaPiena(id_schedina:number){

 this.service.schedinaPiena(id_schedina)
 .subscribe({

  next: (result: Schedina[]) => {
   
   
    this.schede=result;
    console.log("schedina piena",this.schede)
  //  this.play=true;
    this.loading=false;
  },
  error: (error: any) => {

    // Stampa messaggio d'errore
    this.error = error

  }
})

}

deleteSchedina(id_schedina:number){

  this.service.delete(id_schedina)
  .subscribe({
 
   next: (result: Pronostici[]) => {
    
    
     this.pronostico=result;
     console.log("schedina piena",this.pronostico)
     
     this.schede=null;
     this.loading=false;
   },
   error: (error: any) => {
 
     // Stampa messaggio d'errore
     this.error = error
 
   }
 })
 
 }



onEditMatch(indice){
  this.partita_sel.id_partita=this.schede[indice].id_partita;
  this.partita_sel.id_schedina=this.schede[indice].id_schedina;
  this.partita_sel.risultato=this.schede[indice].risultato;
  this.partita_sel.partita=this.schede[indice].partita;
  console.log("this.partita_sel.partita",this.partita_sel.partita);
  console.log("this.schede[indice]",this.schede);
}

onUpdateMatch(partita){
  this.partita_sel.risultato=partita.risultato;;
  this.loading=true;
  
this.service.update(this.partita_sel)
.subscribe({
 
   next: (result: string) => {
  console.log("elemento salvato:",result);
    this.successo();

   },
   error: (error: any) => {

     // Stampa messaggio d'errore
     this.error = error
 //    this.play=true;

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
 
getItemsGirone(gir:string) {
  let girone='A';
  if(null!=gir)
  {
    let lung=gir.length;
    girone=gir.substring(lung-1,lung);
}
  return this.combosel.squadre.filter((item) => item.girone == girone);
}

getVariabile() {

  this.service.getVariabile()
    .subscribe({
      next: (result: boolean) => {
        this.bloccato = result;
        this.getListSchedine();
      },
      error: (error: any) => {
      }
    })
}

successo(){
  this.success = SUCCESS;
  this.loading=false;
  setTimeout(() => {
    this.success = '';
  }, 5000);

}

}
