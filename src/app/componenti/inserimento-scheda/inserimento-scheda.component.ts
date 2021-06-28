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
  @Output() ritono = new EventEmitter();
  @Input() scheda: any = []
  selected: any
  submitBtnState: boolean = false


  constructor(private pronosticiService: GestionePronosticiService) { super() }

  ngOnInit() {
    console.log("this.scheda", this.scheda)
  }

  isAviable(): boolean {
    return this.scheda.some(i => i.risultato == "");
  }

  onAnnulla() {
    this.ritono.emit(false)
  }

  onEditRisultati(ele) {
    console.log("onEditelement", ele)
    console.log("isAviable", this.isAviable())
    this.selected = ele
  }

  getSquadreByGirone(girone) {
    let teams = this.combo.squadre.filter(i => i.girone == girone);
    return teams
  }

  confermaScheda() {
    this.ritono.emit(this.scheda)
  }


}
