import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Combo } from 'src/app/classi/model/combo';
import { Generale } from 'src/app/classi/utils/general-component';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'crea-competizione',
  templateUrl: './crea-competizione.component.html',
  styleUrls: ['./crea-competizione.component.css']
})
export class CreaCompetizioneComponent extends Generale implements OnInit {

  combosel: Combo;
 
  constructor(private combo: CommonService) {
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

  

}
