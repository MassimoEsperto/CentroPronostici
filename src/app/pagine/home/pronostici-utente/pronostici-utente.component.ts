import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Combo } from 'src/app/classi/model/combo';
import { Generale } from 'src/app/classi/utils/general-component';
import { ComboService } from 'src/app/services/combo.service';

@Component({
  selector: 'pronostici-utente',
  templateUrl: './pronostici-utente.component.html',
  styleUrls: ['./pronostici-utente.component.css']
})
export class PronosticiUtenteComponent extends Generale implements OnInit {

  combosel: Combo;
  viewHome:boolean=false
 
  constructor(private combo: ComboService) {
    super();
  }

  ngOnInit() {
    this.getCombo()
  }

  getCombo() {

    this.combo.getCombo()
      .pipe(finalize(() => {
        this.loading = false;
      }))
      .subscribe({

        next: (result: Combo) => {
          this.combosel = result;

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })

  }

  viewScheda(event){
    this.viewHome=event
  }

}