import { Component, Input, OnInit } from '@angular/core';
import { Generale } from 'src/app/classi/utils/general-component';
import { GestionePronosticiService } from 'src/app/services/gestione-pronostici.service';

@Component({
  selector: 'visualizza-schede',
  templateUrl: './visualizza-schede.component.html',
  styleUrls: ['./visualizza-schede.component.css']
})
export class VisualizzaSchedeComponent extends Generale implements OnInit {

  @Input() pronostici: any = []

  scheda_selected: any = []
  viewScheda: boolean = false

  constructor(private pronosticiService: GestionePronosticiService) {
    super();
  }

  ngOnInit() { }

  onViewScheda(element) {
    this.getSchedaCompilata(element.id_schedina)
  }

  onViewList() {
    this.scheda_selected = []
    this.viewScheda = false
  }


  getSchedaCompilata(id_schedina: number) {

    this.pronosticiService.getSchedaCompilata(id_schedina.toString())
      .subscribe({

        next: (result: any) => {

          this.scheda_selected = result
          this.viewScheda = true
        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })

  }
}
