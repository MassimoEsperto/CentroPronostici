import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { defaultIfEmpty, finalize } from 'rxjs/operators';
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
    console.log("this.scheda", this.scheda)
    this.selected = ele
  }

  getSquadreByGirone(girone) {
    let teams = this.combo.squadre.filter(i => i.girone == girone);
    return teams
  }

  confermaScheda() {
    this.ritono.emit(this.scheda)
  }

  onEditCompleto(ele, indice) {
    let ris = this.scheda[indice - 4].risultato.substring(0, 3) + '-' + this.scheda[indice - 3].risultato.substring(0, 3) + '-' + this.scheda[indice - 2].risultato.substring(0, 3) + '-' + this.scheda[indice - 1].risultato.substring(0, 3)
    return ris
  }

  onChange(element) {
    let girone = this.scheda.filter(i => i.tipo == "3" && i.girone == element.girone);
    let team = girone.filter(i => i.specie == "S");
    let completo = girone.find(i => i.specie == "C");
    let completoString = "";
    let sep = "";
    let diff = []

    for (let item of team) {
      let esiste = diff.some(i => i == item.risultato && i != "");
      if (esiste) {
        completoString = ""
        break
      } else {
        completoString = completoString + sep + item.risultato.substring(0, 3)
        sep = "-"
        diff.push(item.risultato)
      }
    }

    completo.risultato = completoString
  }

}
