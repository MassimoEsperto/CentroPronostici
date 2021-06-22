import { Component, OnInit } from '@angular/core';
import { Generale } from 'src/app/classi/utils/general-component';
import { CreaCompetizioneService } from 'src/app/services/crea-competizione.service';

@Component({
  selector: 'tab-punti-previsti',
  templateUrl: './tab-punti-previsti.component.html',
  styleUrls: ['./tab-punti-previsti.component.css']
})
export class TabPuntiPrevistiComponent extends Generale implements OnInit {

  puntiPrevisti: any
  newPunti = 0
  newTesto = ''
  idPunti = ''
  isModifica: boolean = false;

  constructor(private creaService: CreaCompetizioneService) {
    super();
  }

  ngOnInit() {
    this.getPuntiPrevisti()
  }

  openModifica(element) {
    this.isModifica = true;
    this.newPunti = element.valore
    this.idPunti = element.id
    this.newTesto = element.nome
  }

  closeModifica() {
    this.newPunti = 0
    this.idPunti = ''
    this.newTesto = ''
    this.isModifica = false
  }

  //CRUD CAPOCANNONIERE
  getPuntiPrevisti() {

    this.resetErrors();

    this.creaService.getPuntiPrevisti()
      .subscribe({

        next: (result: string) => {
          this.puntiPrevisti = result

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }

  onModPunti(punti) {

    this.resetErrors();

    this.creaService.updPuntiPrevisti(this.idPunti, punti)
      .subscribe({

        next: (result: any) => {

          this.closeModifica()
          this.getPuntiPrevisti()

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }


}
