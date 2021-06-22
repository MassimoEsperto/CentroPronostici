import { Component, Input, OnInit } from '@angular/core';
import { Partita } from 'src/app/classi/model/partita';
import { Generale } from 'src/app/classi/utils/general-component';
import { CreaCompetizioneService } from 'src/app/services/crea-competizione.service';

@Component({
  selector: 'tab-calendario',
  templateUrl: './tab-calendario.component.html',
  styleUrls: ['./tab-calendario.component.css']
})
export class TabCalendarioComponent extends Generale implements OnInit {

  @Input() squadre: any;
  calendario: Partita[] = [];
  casa = '';
  trasferta = '';
  idEvento = '';
  data
  isModifica: boolean = false;

  constructor(private creaService: CreaCompetizioneService) {
    super();
  }
  ngOnInit() {
    this.getCalendario()
  }

  onAddPartita(casa: string, trasferta: string, data) {

    let girone = this.squadre.find(i => i.nome == casa).girone;

    let newPartita: Partita = new Partita(casa + '-' + trasferta, girone, data.toString());

    this.addPartita(newPartita);

  }

  onModPartita(casa: string, trasferta: string, data) {

    let girone = this.squadre.find(i => i.nome == casa).girone;

    let newPartita: Partita = new Partita(casa + '-' + trasferta, girone, data.toString());
    newPartita.id_evento = this.idEvento

    this.modPartita(newPartita);

  }

  openModifica(element) {
    this.isModifica = true;
    let partita = element.partita.split("-");
    this.casa = partita[0]
    this.trasferta = partita[1]
    this.data = element.data
    this.idEvento = element.id_evento
  }

  closeModifica() {
    this.casa = ''
    this.trasferta = ''
    this.data = null
    this.idEvento = ''
    this.isModifica = false
  }

  //CRUD 
  getCalendario() {

    this.resetErrors();

    this.creaService.getCalendario()
      .subscribe({

        next: (result: any) => {

          this.calendario = result
        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }

  addPartita(match: Partita) {

    this.resetErrors();

    this.creaService.setPartita(match)
      .subscribe({

        next: (result: any) => {

          this.casa = '';
          this.trasferta = '';
          this.getCalendario()

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }

  onDelete(input: string) {

    this.resetErrors();

    this.creaService.deletePartita(input)
      .subscribe({

        next: (result: string) => {

          this.getCalendario()

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }

  modPartita(match: Partita) {

    this.resetErrors();

    this.creaService.updPartita(match)
      .subscribe({

        next: (result: any) => {

          this.closeModifica()
          this.getCalendario()

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }
}
