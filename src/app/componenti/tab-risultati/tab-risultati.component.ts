import { Component, OnInit } from '@angular/core';
import { Calendario } from 'src/app/classi/model/calendario';
import { risultato } from 'src/app/classi/utils/enums';
import { Generale } from 'src/app/classi/utils/general-component';
import { GestioneCompetizioneService } from 'src/app/services/gestione-competizione.service';

@Component({
  selector: 'tab-risultati',
  templateUrl: './tab-risultati.component.html',
  styleUrls: ['./tab-risultati.component.css']
})
export class TabRisultatiComponent extends Generale implements OnInit {

  partite: any[];
  newSelected: Calendario = new Calendario(1, '', null, 0, 0, '', '', '', '', '', '', '');
  
  constructor(private gestioneService: GestioneCompetizioneService) {
    super();
  }

  ngOnInit() {
    this.getCalendario()
  }

  onEditMatch(match) {
    this.newSelected.id_evento = match.id_evento;
    this.newSelected.partita = match.descrizione;
    this.newSelected.goalc = 0;
    this.newSelected.goalt = 0;
  }

  getCalendario() {

    this.gestioneService.getScommesseRisultati()
      .subscribe({

        next: (result: Calendario[]) => {

          this.partite = result;

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })

  }

  
  onUpdateMatch(newSelected) {

    this.resetErrors();
    this.newSelected = newSelected;

    let golc: number = this.newSelected.goalc;
    let golt: number = this.newSelected.goalt;
    let goltot = Number(golc) + Number(golt);

    this.newSelected.risEsatto = golc > 4 || golt > 4 ? risultato.ALTRO : golc + '-' + golt;
    if (golc == golt) {
      this.newSelected.fisso = risultato.X;
      this.newSelected.doppiachance1 = risultato.UNOX;
      this.newSelected.doppiachance2 = risultato.XDUE;
    }
    else if (golc > golt) {
      this.newSelected.fisso = risultato.UNO;
      this.newSelected.doppiachance1 = risultato.UNOX;
      this.newSelected.doppiachance2 = risultato.UNO_DUE;
    }
    else if (golc < golt) {
      this.newSelected.fisso = risultato.DUE;
      this.newSelected.doppiachance1 = risultato.XDUE;
      this.newSelected.doppiachance2 = risultato.UNO_DUE;
    }

    this.newSelected.underOver = goltot > 2 ? risultato.OVER : risultato.UNDER;

    this.newSelected.pariDispari = goltot % 2 === 1 ? risultato.DISPARI : risultato.PARI;

    this.newSelected.golNogol = golc > 0 && golt > 0 ? risultato.GOL : risultato.NOGOL;




    this.gestioneService.updScommesseRisultati({
      id_evento: this.newSelected.id_evento,
      partita: '',
      data: null,
      goalc: this.newSelected.goalc,
      goalt: this.newSelected.goalt,
      fisso: this.newSelected.fisso,
      doppiachance1: this.newSelected.doppiachance1,
      doppiachance2: this.newSelected.doppiachance2,
      underOver: this.newSelected.underOver,
      risEsatto: this.newSelected.risEsatto,
      pariDispari: this.newSelected.pariDispari,
      golNogol: this.newSelected.golNogol
    })
      .subscribe({

        next: (result: any) => {

          this.getCalendario()
          this.successo();
        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })

  }

}
