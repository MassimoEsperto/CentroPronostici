import { Component, OnInit } from '@angular/core';
import { GestionePronosticiService } from 'src/app/services/gestione-pronostici.service';
import { Generale } from 'src/app/classi/utils/general-component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent extends Generale implements OnInit {
  username: string;
  isAdmin: boolean;
  isPlayer: boolean;
  variabile: boolean;

  constructor(private service: GestionePronosticiService) { super() }

  ngOnInit() {
    this.isAdmin = this.service.isadmin();
    this.username = this.service.username();
    this.isPlayer = this.service.isPlayer();
    this.loading = true;
    this.getVariabile();
  }

  getVariabile() {

    this.service.getBloccato()
      .subscribe({
        next: (result: boolean) => {
          this.variabile = result;
        },
        error: (error: any) => {
        }
      })
  }

  setVariabile(choise: number) {

    this.service.setBloccato(choise)
      .subscribe({
        next: (result: boolean) => {
          this.successo();
        },
        error: (error: any) => {
        }
      })
  }

  onUpdateClosePronostici(chiusura) {
    let scelta = (chiusura) ? 1 : 0;
    this.setVariabile(scelta);
  }


}
