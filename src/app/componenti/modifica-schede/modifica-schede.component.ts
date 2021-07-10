import { Component, Input, OnInit } from '@angular/core';
import { Generale } from 'src/app/classi/utils/general-component';
import { CommonService } from 'src/app/services/common.service';
import { GestionePronosticiService } from 'src/app/services/gestione-pronostici.service';

@Component({
  selector: 'modifica-schede',
  templateUrl: './modifica-schede.component.html',
  styleUrls: ['./modifica-schede.component.css']
})
export class ModificaSchedeComponent extends Generale implements OnInit {

  @Input() pronostici: any = []
  @Input() combo: any;

  id_selected: number = 0;
  scheda_selected: any = []
  evento_selected: any
  viewModScheda: boolean = false

  constructor(private pronosticiService: GestionePronosticiService) {
    super();
  }

  ngOnInit() {}

  onEditScheda(scheda) {
    this.getSchedaCompilata(scheda.id_schedina);
  }

  onDeleteScheda(scheda) {
    this.id_selected = scheda.id_schedina;
  }

  getSquadreByGirone(girone) {
    let teams
    if (girone) {
      teams = this.combo.squadre.filter(i => i.girone == girone);
    } else {
      teams = this.combo.squadre;
    }

    return teams
  }

  onEditEvento(element) {
    this.evento_selected = element
  }

  onViewList() {
    this.scheda_selected = []
    this.viewModScheda = false
  }

  //CRUD
  deleteScheda() {

    this.pronosticiService.delScheda(this.id_selected)
      .subscribe({

        next: (result: any) => {

          this.viewModScheda = false
          this.pronostici = this.pronostici.filter(item => item.id_schedina !== result.id_schedina);

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })

  }

  onUpdateEvento(evento: any) {

    this.evento_selected.risultato = evento.risultato;

    this.pronosticiService.updEventoScheda(this.evento_selected)
      .subscribe({

        next: (result: string) => {
          this.successo();
          this.onChange(evento)
        },
        error: (error: any) => {
          this.evento_selected.risultato = ""
          this.stampaErrore(error);

        }
      })

  }

  getSchedaCompilata(id_schedina: number) {

    this.pronosticiService.getSchedaCompilata(id_schedina.toString())
      .subscribe({

        next: (result: any) => {

          this.scheda_selected = result
          this.viewModScheda = true
        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })

  }

  onChange(element) {
    let girone = this.scheda_selected.filter(i => i.tipo == "3" && i.girone == element.girone);
    let team = girone.filter(i => i.specie == "S");
    let completo = girone.find(i => i.specie == "C");
    let completoString = "";
    let sep = "";
    let diff = []

    for (let item of team) {
      let esiste = diff.some(i => i == item.risultato && i != "");
      if (esiste) {
        completoString = "non valido"
        break
      } else {
        completoString = completoString + sep + item.risultato.substring(0, 3)
        sep = "-"
        diff.push(item.risultato)
      }
    }

    completo.risultato = completoString
    this.pronosticiService.updEventoScheda(completo)
    .subscribe({

      next: (result: string) => {
       
      },
      error: (error: any) => {
        this.evento_selected.risultato = ""
        this.stampaErrore(error);

      }
    })
  }
}
