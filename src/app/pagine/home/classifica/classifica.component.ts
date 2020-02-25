import { Component, OnInit } from '@angular/core';
import { Pronostici } from 'src/app/classi/model/pronostici';
import { Schedina } from 'src/app/classi/model/schedina';
import { GestionePronosticiService } from 'src/app/services/gestione-pronostici.service';
import { ClrDatagridSortOrder } from '@clr/angular';

@Component({
  selector: 'app-classifica',
  templateUrl: './classifica.component.html',
  styleUrls: ['./classifica.component.css']
})
export class ClassificaComponent implements OnInit {

  constructor(private service: GestionePronosticiService) { }

  classifica:Pronostici[];
  schede:Schedina[];

  error = '';
  success = '';
  loading:boolean=true;

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
