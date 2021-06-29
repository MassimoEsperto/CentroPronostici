import { Component, OnInit } from '@angular/core';
import { Generale } from 'src/app/classi/utils/general-component';
import { CreaCompetizioneService } from 'src/app/services/crea-competizione.service';
import { GestionePronosticiService } from 'src/app/services/gestione-pronostici.service';

@Component({
  selector: 'tab-elimina-schede',
  templateUrl: './tab-elimina-schede.component.html',
  styleUrls: ['./tab-elimina-schede.component.css']
})
export class TabEliminaSchedeComponent extends Generale implements OnInit {

  pronostici: any = []
  id_selected: number = 0;

  constructor(private creaService: CreaCompetizioneService, private pronosticiService: GestionePronosticiService) {
    super();
  }
  ngOnInit() {
    this.getAllSchede()
  }

  onDeleteScheda(scheda) {
    this.id_selected = scheda.id_schedina;
  }

  //CRUD
  deleteScheda() {

    this.pronosticiService.delScheda(this.id_selected)
      .subscribe({

        next: (result: any) => {

          this.pronostici = this.pronostici.filter(item => item.id_schedina !== result.id_schedina);

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })

  }

  getAllSchede() {

    this.creaService.getAllSchede()
      .subscribe({

        next: (res: any) => {

          this.pronostici = res
 
        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })

  }
}
