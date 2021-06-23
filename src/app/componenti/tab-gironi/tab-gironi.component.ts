import { Component, Input, OnInit } from '@angular/core';
import { Generale } from 'src/app/classi/utils/general-component';
import { GestioneCompetizioneService } from 'src/app/services/gestione-competizione.service';

@Component({
  selector: 'tab-gironi',
  templateUrl: './tab-gironi.component.html',
  styleUrls: ['./tab-gironi.component.css']
})
export class TabGironiComponent extends Generale implements OnInit {

  @Input() squadre: any;
  gironi: any;
  newSelected: any;
  squadreGirone: any;

  constructor(private gestioneService: GestioneCompetizioneService) {
    super();
  }

  ngOnInit() {
    this.getScommesseGironi()
  }

  onEditSelected(element) {
    this.newSelected = element
    this.squadreGirone = this.squadre.filter(i => i.girone == element.girone);

  }

  //CRUD 
  getScommesseGironi() {

    this.resetErrors();

    this.gestioneService.getScommesseGironi()
      .subscribe({

        next: (result: any) => {

          this.gironi = result

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }

  onUpdateSelected(element) {

    this.gestioneService.updScommesseGirone({
      id_evento: element.id_evento,
      scommessa: element.descrizione,
      risultato: element.squadra
    })
      .subscribe({

        next: (result: any) => {

          this.getScommesseGironi()
          this.successo();
        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })

  }
}
