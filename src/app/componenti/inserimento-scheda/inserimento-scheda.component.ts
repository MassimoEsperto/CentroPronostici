import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Generale } from 'src/app/classi/utils/general-component';
import { GestionePronosticiService } from 'src/app/services/gestione-pronostici.service';

@Component({
  selector: 'inserimento-scheda',
  templateUrl: './inserimento-scheda.component.html',
  styleUrls: ['./inserimento-scheda.component.css']
})
export class InserimentoSchedaComponent extends Generale implements OnInit {

  @Input() combo: any;
  @Output() ritono= new EventEmitter();
  scheda: any = []
  selected: any
  submitBtnState:boolean=false


  constructor(private pronosticiService: GestionePronosticiService) { super() }

  ngOnInit() {
    console.log("combo", this.combo)

    this.getSchedaDaCompilare()
  }

  isAviable(): boolean {
    return this.scheda.some(i => i.risultato == "");
  }

  onAnnulla(){
    this.ritono.emit(true)
  }

  onEditRisultati(ele) {
    console.log("onEditelement", ele)
    console.log("isAviable", this.isAviable())
    this.selected = ele
  }

  getSquadreByGirone(girone){
    let teams = this.combo.squadre.filter(i => i.girone == girone);
    return teams
  }

  //CRUD 
  getSchedaDaCompilare() {

    this.resetErrors();

    this.pronosticiService.getSchedaDaCompilare()
      .subscribe({

        next: (result: string) => {

          this.scheda = result
          console.log("this.scheda", this.scheda)
        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }

  confermaScheda() {
    this.resetErrors();
    this.submitBtnState = true;
    let username = this.pronosticiService.username();

    this.pronosticiService.getIdSchedina(username)
      .subscribe({

        next: (res: number) => {

          let payload = {
            id_schedina: Number(res),
            scheda: this.scheda
          }
          console.log("payload", payload)
          this.insertScheda(payload)

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })

  }

  insertScheda(payload: any) {

    this.loading = true;

    this.pronosticiService.setScheda(payload)
    .pipe(finalize(() => {
      this.submitBtnState = false;
    }))
      .subscribe({
        
        next: (result: string) => {

          if (result['risposta'] == 'ko') {
            this.error = result['stato']
          }
          else {
            this.successo();
          }

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })


  }



}
