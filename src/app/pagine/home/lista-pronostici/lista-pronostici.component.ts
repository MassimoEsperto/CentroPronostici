import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Pronostici } from 'src/app/classi/model/pronostici';
import { GestionePronosticiService } from 'src/app/services/gestione-pronostici.service';
import { Schedina } from 'src/app/classi/model/schedina';
import { ComboService } from 'src/app/services/combo.service';
import { Combo } from 'src/app/classi/model/combo';
import { Generale } from 'src/app/classi/utils/general-component';

@Component({
  selector: 'app-lista-pronostici',
  templateUrl: './lista-pronostici.component.html',
  styleUrls: ['./lista-pronostici.component.css']
})
export class ListaPronosticiComponent extends Generale implements OnInit {

  constructor(private service: GestionePronosticiService,private combo: ComboService) {super() }
  pronostico:Pronostici[];
  schede:Schedina[];
  id_schedina:number=0;
  partita_sel:Schedina=new Schedina(0,0,'',0,'','');
  
  bloccato:boolean=true;
 
  combosel:Combo;

  
  ngOnInit() {
    this.getBloccato();
    this.getCombo();
  }

  onEditScheda(scheda){
    this.loading=true;
    this.getSchedinaPiena(scheda.id_schedina);
  }

  onDeleteScheda(scheda){
    this.id_schedina=scheda.id_schedina; 
  }

  onViewScheda(scheda){
    this.loading=true;
    this.getSchedinaFinale(scheda.id_schedina);
  }

  deleteScheda(){
    this.deleteSchedina(this.id_schedina);
  }

  getListPronostici(){
    let username=this.service.username();

   this.service.list(username)
   .subscribe({
  
    next: (result: Pronostici[]) => {

      this.pronostico=result;
      this.loading=false;
  
    },
    error: (error: any) => {

      this.stampaErrore(error);

    }
  })

}

getListPronosticiFinale(){
  let username=this.service.username();

 this.service.listFinale(username)
 .subscribe({

  next: (result: Pronostici[]) => {

    this.pronostico=result;
    this.loading=false;

  },
  error: (error: any) => {

    this.stampaErrore(error);

  }
})

}

getSchedinaPiena(id_schedina:number){

 this.service.schedinaPiena(id_schedina)
 .subscribe({

  next: (result: Schedina[]) => {
   
    this.schede=result;
    this.loading=false;
  },
  error: (error: any) => {

    this.stampaErrore(error);

  }
})

}


getSchedinaFinale(id_schedina:number){

  this.service.schedinaFinale(id_schedina)
  .subscribe({
 
   next: (result: Schedina[]) => {
     
     this.schede=result;
     this.loading=false;
   },
   error: (error: any) => {
 
    this.stampaErrore(error);
 
   }
 })
 
 }

deleteSchedina(id_schedina:number){

  this.service.delete(id_schedina)
  .subscribe({
 
   next: (result: Pronostici[]) => {
    
     this.pronostico=result; 
     this.schede=null;
     this.loading=false;
   },
   error: (error: any) => {
 
    this.stampaErrore(error);
 
   }
 })
 
 }



onEditMatch(indice){
  this.partita_sel.id_partita=this.schede[indice].id_partita;
  this.partita_sel.id_schedina=this.schede[indice].id_schedina;
  this.partita_sel.risultato=this.schede[indice].risultato;
  this.partita_sel.partita=this.schede[indice].partita;
}

onUpdateMatch(partita){
  this.partita_sel.risultato=partita.risultato;;
  this.loading=true;
  
this.service.update(this.partita_sel)
.subscribe({
 
   next: (result: string) => {
    this.successo();

   },
   error: (error: any) => {

    this.stampaErrore(error);

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
 
    this.stampaErrore(error);
 
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

getBloccato() {

  this.service.getBloccato()
    .subscribe({
      next: (result: boolean) => {
        this.bloccato = result;
        if(this.bloccato)
        {
          this.getListPronosticiFinale();
        }
        else
        {
          this.getListPronostici();
        }
     
      },
      error: (error: any) => {
      }
    })
}


}
