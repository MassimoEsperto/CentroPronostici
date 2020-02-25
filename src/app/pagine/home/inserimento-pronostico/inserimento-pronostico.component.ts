import { Component, OnInit } from '@angular/core';
import { GestionePronosticiService } from 'src/app/services/gestione-pronostici.service';
import { Schedina } from 'src/app/classi/model/schedina';
import { ComboService } from 'src/app/services/combo.service';
import { Combo } from 'src/app/classi/model/combo';
import { Generale } from 'src/app/classi/utils/general-component';

@Component({
  selector: 'app-inserimento-pronostico',
  templateUrl: './inserimento-pronostico.component.html',
  styleUrls: ['./inserimento-pronostico.component.css']
})
export class InserimentoPronosticoComponent extends Generale implements OnInit {

  constructor(private service: GestionePronosticiService, private combo: ComboService) { super() }
  schede: Schedina[];
  play: boolean = false;
  avvisovalidate: boolean = false;

  partita_sel: Schedina //la partita che viene selezionata

  id_schedina: number;
  combosel: Combo;

  bloccato: boolean = true;

  //per le multiselect
  partita_sel1: Schedina
  partita_sel2: Schedina
  partita_sel3: Schedina
  partita_sel4: Schedina

  ngOnInit() {
    this.getCombo();
    this.getVariabile();
  }

  nuovaScheda() {
    this.resetErrors();
    this.loading = true;
    let username = this.service.username();

    this.service.newSchedina(username)
      .subscribe({

        next: (res: number) => {

          this.id_schedina = Number(res);
          this.getSchedinaVuota();
          this.play = true;

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })

  }

  insertPronostico() {

    if (!this.validateSchede()) {
      this.avvisovalidate = true;
      return;
    }

    this.play = false;
    this.loading = true;

    this.service.insert(this.schede)
      .subscribe({

        next: (result: string) => {

          if (result['risposta'] == 'ko') {
            this.error = result['stato']
            this.play = true;
          }
          else {
            this.successo();
          }


        },
        error: (error: any) => {

          this.stampaErrore(error);
          this.play = true;

        }
      })


  }

  getSchedinaVuota() {
    let username = this.service.username();

    this.service.schedinaVuota(this.id_schedina, username)
      .subscribe({

        next: (result: Schedina[]) => {

          this.schede = result;
          this.loading = false;
        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })

  }


  getCombo() {

    this.combo.getCombo()
      .subscribe({

        next: (result: Combo) => {

          this.combosel = result;

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })

  }


  /**
   * 
   * @param indice 
   * in base alla partita selezionata compila il modal
   */
  onEditMatch(indice) {
    this.partita_sel = this.schede[indice];
  }

  onEditMatchMultiple(indice) {
    this.partita_sel1 = this.schede[indice];
    this.partita_sel2 = this.schede[indice - 1];
    this.partita_sel3 = this.schede[indice - 2];
    this.partita_sel4 = this.schede[indice - 3];
  }
  onUpdateMatch(match) {
  }

  machVisibile(match) {
    let num = match - 2;

    if (num % 4 == 0)
      return true
    else
      return false
  }

  getItemsGirone(gir: string) {
    let lung = gir.length;
    let girone = gir.substring(lung - 1, lung);

    return this.combosel.squadre.filter((item) => item.girone == girone);
  }

  validateSchede() {
    let validate: boolean = true;

    this.schede.forEach(element => {
      if (element.risultato == '') {
        validate = false;
        return;
      }

    });
    return validate;
  }

  getVariabile() {

    this.service.getBloccato()
      .subscribe({
        next: (result: boolean) => {
          this.bloccato = result;
          this.loading = false;
        },
        error: (error: any) => {
        }
      })
  }

}
