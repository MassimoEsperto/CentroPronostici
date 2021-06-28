import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Combo } from 'src/app/classi/model/combo';
import { Generale } from 'src/app/classi/utils/general-component';
import { ComboService } from 'src/app/services/combo.service';
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

  constructor(private commonService: CommonService, private pronosticiService: GestionePronosticiService) {
    super();
  }

  ngOnInit() {
    this.getCombo()
    this.getSchedaDaCompilare()
    this.getBloccato()
    this.getClassificaByUtente()
  }

  viewScheda(event) {
    if (event) {
      this.getIdSchedina(event);
    }else{
      this.viewSchedaDaCompilare = false
    }
  }

  nuovaScheda() {
    this.viewSchedaDaCompilare = true
  }

  randomScheda() {

    const list = []
    for (var ele of this.scheda) {
      let tmp = {
        descrizione: ele.descrizione,
        id_evento: ele.id_evento,
        risultato: this.getRisultatoRandom(ele.tipo, ele.gruppo, ele.girone, list),
        girone: ele.girone || "",
        gruppo: ele.gruppo || "",
        tipo: ele.tipo
      }
      list.push(tmp)
    }
    this.getIdSchedina(list)
  }

  getRisultatoRandom(tipo: string, gruppo: string, girone: string, list) {

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
        let inizio = this.combosel.squadre.filter(i => i.girone == girone);
        let presenti = list.filter(i => i.girone == girone);
 
        let teams = []
        for (let ele of inizio) {
          let esiste = presenti.some(i => i['risultato'] == ele['nome']);
          if (!esiste)
            teams.push(ele)
        }

        let n3: number = Math.floor(Math.random() * teams.length);
        return teams[n3]['nome']

      default:
        return ""
    }
  }

  getCombo() {

    this.commonService.getCombo()
      .pipe(finalize(() => {
        this.loading = false;
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


  getIdSchedina(scheda) {
    this.resetErrors();
 
    let username = this.pronosticiService.username();

    this.pronosticiService.getIdSchedina(username)
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
            this.getClassificaByUtente()
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

    this.pronosticiService.getClassificaByUtente(username)
      .subscribe({

        next: (res: any) => {

          this.pronostici=res
          console.log("this.pronostici",this.pronostici)
        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })

  }

}