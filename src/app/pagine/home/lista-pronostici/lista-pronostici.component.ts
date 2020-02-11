import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Pronostici } from 'src/app/classi/model/pronostici';
import { GestionePronosticiService } from 'src/app/services/gestione-pronostici.service';
import { Schedina } from 'src/app/classi/model/schedina';

@Component({
  selector: 'app-lista-pronostici',
  templateUrl: './lista-pronostici.component.html',
  styleUrls: ['./lista-pronostici.component.css']
})
export class ListaPronosticiComponent implements OnInit {

  constructor(private service: GestionePronosticiService) { }
  pronostico:Pronostici[];
  error = '';
  success = '';
  loading:boolean=true;

  ngOnInit() {
    this.getListSchedine();
    console.log("this.loading.emit(false)");
  }

  onEditScheda(scheda){
    this.loading=true;
    console.log("scheda",scheda);
    this.getSchedinaPiena(scheda.id_schedina);
  }

  getListSchedine(){
    let username=this.service.username();

   this.service.list(username)
   .subscribe({
  
    next: (result: Pronostici[]) => {
console.log("result",result);
      this.pronostico=result;
      console.log("this.pronostico",this.pronostico);
    },
    error: (error: any) => {

      // Stampa messaggio d'errore
      this.error = error

    }
  })

}

getSchedinaPiena(id_schedina:number){
  let username=this.service.username();

 this.service.schedinaPiena(id_schedina)
 .subscribe({

  next: (result: Schedina[]) => {
   
    console.log("schedina piena",result)
    this.loading=false;
  },
  error: (error: any) => {

    // Stampa messaggio d'errore
    this.error = error

  }
})

}

}
