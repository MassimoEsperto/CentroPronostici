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

  constructor(private service: GestionePronosticiService) {super() }

  classifica:Pronostici[];
  schede:Schedina[];

 // descSort = ClrDatagridSortOrder.DESC;

  ngOnInit() {
    this.getClassifica();
  }


  onViewScheda(scheda){
    this.loading=true;
    this.getSchedinaFinale(scheda.id_schedina);
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

  getClassifica(){
  
   this.service.classifica()
   .subscribe({
  
    next: (result: Pronostici[]) => {
  
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
