import { Component, OnInit } from '@angular/core';
import { Pronostici } from 'src/app/classi/model/pronostici';
import { Schedina } from 'src/app/classi/model/schedina';
import { GestionePronosticiService } from 'src/app/services/gestione-pronostici.service';
import { ClrDatagridSortOrder } from '@clr/angular';
import { Generale } from 'src/app/classi/utils/general-component';

@Component({
  selector: 'app-classifica',
  templateUrl: './classifica.component.html',
  styleUrls: ['./classifica.component.css']
})
export class ClassificaComponent extends Generale implements OnInit {

  constructor(private pronosticiService: GestionePronosticiService) {super() }

  classifica:any[];
  schede:any[];

 // descSort = ClrDatagridSortOrder.DESC;

  ngOnInit() {
    this.getClassifica();
  }


  onViewScheda(scheda){
    this.loading=true;
    this.getSchedaCompilata(scheda.id_schedina);
  }


  getSchedaCompilata(id_schedina:number){

    this.pronosticiService.getSchedaCompilata(id_schedina.toString())
    .subscribe({
   
     next: (result: any[]) => {
      
       this.schede=result;
       this.loading=false;
     },
     error: (error: any) => {
   
      this.stampaErrore(error);
   
     }
   })
   
   }

  getClassifica(){
  
   this.pronosticiService.getClassificaGenerale()
   .subscribe({
  
    next: (result: any[]) => {
  
      this.classifica=result;
      this.loading=false;
  
    },
    error: (error: any) => {
  
      // Stampa messaggio d'errore
      this.error = error
  
    }
  })
  
  }

}
