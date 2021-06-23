import { Component, Input, OnInit } from '@angular/core';
import { Generale } from 'src/app/classi/utils/general-component';
import { GestioneCompetizioneService } from 'src/app/services/gestione-competizione.service';

@Component({
  selector: 'tab-scommesse-base',
  templateUrl: './tab-scommesse-base.component.html',
  styleUrls: ['./tab-scommesse-base.component.css']
})
export class TabScommesseBaseComponent extends Generale implements OnInit {

  @Input() combo: any;
  scommesse: any = []
  gruppo = '';
  risultato = '';

  constructor(private gestioneService: GestioneCompetizioneService) {
    super();
  }
  ngOnInit() {
    this.getScommesseBase()
  }

  onChangeSelect(e) {
    this.risultato = ''
  }

  popolaCombo() {

    switch (this.gruppo) {
      case 'C':
        return this.combo.cannonieri
      case '':
        return []

      default:
        return this.combo.team

    }
  }

  //CRUD 
  getScommesseBase() {

    this.resetErrors();

    this.gestioneService.getScommesseBase()
      .subscribe({

        next: (result: any) => {

          this.scommesse = result


        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }

  onDeleteRecord(input: any) {

    this.resetErrors();

    this.gestioneService.delScommesseBase(input.gruppo, input.risultato)
      .subscribe({

        next: (result: string) => {

          this.getScommesseBase()

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }

  onAddRecord(gruppo, risultato) {

    this.resetErrors();

    this.gestioneService.setScommesseBase(gruppo, risultato)
      .subscribe({

        next: (result: string) => {

          this.getScommesseBase()

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }
}

