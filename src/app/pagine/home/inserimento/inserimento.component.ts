
import { Component, OnInit } from '@angular/core';
import { InserimentoService } from 'src/app/services/inserimento.service';
import { SUCCESS } from 'src/app/classi/utils/costanti';
import { Schedina } from 'src/app/classi/model/schedina';

@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css']
})
export class InserimentoComponent implements OnInit {

  constructor(private service: InserimentoService) { }
  schede:Schedina[];
  play:boolean=false;

  error = '';
  success = '';
  id_schedina:number;
  risultatiClassici = ['1', 'X', '2', '1X', 'X2','OVER','UNDER','GOL','NOGOL','PARI','DISPARI'];
  risultatiEsatti = ['1-0', '2-0','3-0','4-0','5-0','2-1','3-1','4-1','5-1','3-2','4-2','5-2','4-3','5-3','5-4',
                    '1-1','2-2','3-3','4-4','5-5',
                    '0-1','0-2','0-3','0-4','0-5','1-2','1-3','1-4','1-5','2-3','2-4','2-5','3-4','3-5','4-5'];
  
  ngOnInit() {
    console.log('start schedina');
  }

  nuovaScheda(){
    this.resetErrors();
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
    console.log('template form submit', this.schede);
    this.success = SUCCESS; 
    this.play=false;
  }

  getSchedinaVuota(){
    let username=this.service.username();

   this.service.schedinaVuota(this.id_schedina ,username)
   .subscribe({
  
    next: (result: Schedina[]) => {

      this.schede=result;
     
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
}
