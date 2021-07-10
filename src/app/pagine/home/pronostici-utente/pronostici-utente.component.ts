import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { SchedaModo } from 'src/app/classi/utils/enums';
import { Generale } from 'src/app/classi/utils/general-component';
import { CommonService } from 'src/app/services/common.service';
import { GestionePronosticiService } from 'src/app/services/gestione-pronostici.service';

@Component({
  selector: 'pronostici-utente',
  templateUrl: './pronostici-utente.component.html',
  styleUrls: ['./pronostici-utente.component.css']
})
export class PronosticiUtenteComponent extends Generale implements OnInit {

  combosel: any;
  viewSchedaDaCompilare: boolean = false
  bloccato: boolean = false
  scheda: any = []
  pronostici: any = []
  id_copia: number
  disableBtn: boolean = true

  constructor(private commonService: CommonService, private pronosticiService: GestionePronosticiService) {
    super();
  }

  ngOnInit() {
    this.loading = true;
    this.getCombo()
    this.getSchedaDaCompilare()
    this.getBloccato()
  }

  viewScheda(event) {
    if (event) {
      this.getIdSchedina(event, SchedaModo.COMPILATA);
    } else {
      this.viewSchedaDaCompilare = false
    }
  }

  nuovaScheda() {
    this.viewSchedaDaCompilare = true
  }

  copiaScheda(id_copia) {
    this.disableBtn = true
    this.getSchedaCompilata(id_copia)
  }

  randomScheda() {

    const list = []
    for (var ele of this.scheda) {
      let tmp = {
        descrizione: ele.descrizione,
        id_evento: ele.id_evento,
        risultato: this.getRisultatoRandom(ele.tipo, ele.gruppo, ele.girone, ele.specie, list),
        girone: ele.girone || "",
        gruppo: ele.gruppo || "",
        tipo: ele.tipo
      }
      list.push(tmp)
    }
    this.getIdSchedina(list, SchedaModo.RANDOM)
  }

  getRisultatoRandom(tipo: string, gruppo: string, girone: string, specie: string, list) {

    switch (tipo) {
      case "1":
        let n1: number = Math.floor(Math.random() * this.combosel.risultati.length);
        return this.combosel.risultati[n1]

      case "2":
        if (gruppo == "C") {
          let n2: number = Math.floor(Math.random() * this.combosel.cannonieri.length);
          return this.combosel.cannonieri[n2]
        } else {
          let n2: number = Math.floor(Math.random() * this.combosel.squadre.length);
          return this.combosel.squadre[n2]['nome']
        }

      case "3":
        let presenti = list.filter(i => i.girone == girone);
        if (specie != "C") {
          let inizio = this.combosel.squadre.filter(i => i.girone == girone);

          let teams = []
          for (let ele of inizio) {
            let esiste = presenti.some(i => i['risultato'] == ele['nome']);
            if (!esiste)
              teams.push(ele)
          }

          let n3: number = Math.floor(Math.random() * teams.length);
          return teams[n3]['nome']
        } else {
          let completoString = ""
          let sep = "";

          for (let item of presenti) {
            completoString = completoString + sep + item.risultato.substring(0, 3)
            sep = "-"
          }
          return completoString
        }
      default:
        return ""
    }
  }

  getCombo() {

    this.commonService.getCombo()
      .pipe(finalize(() => {

      }))
      .subscribe({

        next: (result: any) => {
          this.combosel = result;

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })

  }

  getBloccato() {

    this.commonService.getOpzioni()
      .subscribe({
        next: (result: any) => {
          this.bloccato = result.valore;
          if (this.bloccato) {
            this.getClassificaByUtente()
          }
          else {
            this.getSchedeByUtente()
          }
        },
        error: (error: any) => {
        }
      })
  }

  getSchedaDaCompilare() {

    this.resetErrors();

    this.pronosticiService.getSchedaDaCompilare()
      .subscribe({

        next: (result: any) => {

          this.scheda = result

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }


  getIdSchedina(scheda, desc) {

    this.resetErrors();
    this.disableBtn = true

    let username = this.pronosticiService.username();

    this.pronosticiService.getIdSchedina(username, desc)
      .subscribe({

        next: (res: number) => {

          let payload = {
            id_schedina: Number(res),
            scheda: scheda
          }

          this.insertScheda(payload)

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })

  }

  insertScheda(payload: any) {

    this.loading = true;

    this.pronosticiService.setScheda(payload)
      .pipe(finalize(() => {

      }))
      .subscribe({

        next: (result: string) => {

          if (result['risposta'] == 'ko') {
            this.error = result['stato']
          }
          else {
            this.successo()
            this.viewSchedaDaCompilare = false
            this.getSchedeByUtente()
          }

        },
        error: (error: any) => {
          this.stampaErrore(error);
        }
      })

  }

  getClassificaByUtente() {
    this.resetErrors();

    let username = this.pronosticiService.username();
    this.pronostici = []

    this.pronosticiService.getClassificaByUtente(username)
      .subscribe({

        next: (res: any) => {

          this.pronostici = res
          this.disableBtn = false
          this.loading = false

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })

  }

  getSchedeByUtente() {
    this.resetErrors();

    let username = this.pronosticiService.username();
    this.pronostici = []

    this.pronosticiService.getSchedeByUtente(username)
      .subscribe({

        next: (res: any) => {

          this.pronostici = res
          this.disableBtn = false
          this.loading = false

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })

  }

  getSchedaCompilata(id_schedina: number) {

    this.pronosticiService.getSchedaCompilata(id_schedina.toString())
      .subscribe({

        next: (result: any) => {


          let scheda_selected = result
          if (scheda_selected.length) {
            this.getIdSchedina(scheda_selected, SchedaModo.COPIATA)
          } else {
            this.vediErrore("Scheda inesistente");
            this.disableBtn = false
          }
        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })

  }


}