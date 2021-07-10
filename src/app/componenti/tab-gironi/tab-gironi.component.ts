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

         this.onChange(element)
        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })

  }

  onChange(element) {
    
    this.gironi.find(i => i.id_evento == element.id_evento).risultato=element.squadra;
    let girone = this.gironi.filter(i => i.girone == element.girone);
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

    this.gestioneService.updScommesseGirone({
      id_evento: completo.id_evento,
      scommessa: completo.descrizione,
      risultato: completo.risultato
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
