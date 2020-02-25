import { User } from 'src/app/classi/model/user';
import { Component, OnInit } from '@angular/core';
import { GestionePronosticiService } from 'src/app/services/gestione-pronostici.service';
import { SUCCESS } from 'src/app/classi/utils/costanti';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  username: string;
  isAdmin: boolean;
  isPlayer: boolean;
  loading: boolean = true;
  variabile: boolean;
  success = '';

  constructor(private service: GestionePronosticiService) { }

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
          console.log("variabile ritorno ", result);
          this.variabile = result;
        },
        error: (error: any) => {
        }
      })
  }

  setVariabile(choise:number) {

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
    let scelta =(chiusura)?1:0;
    console.log("scelta",scelta);
    this.setVariabile(scelta);
  }

  successo() {
    this.success = SUCCESS;
    setTimeout(() => {
      this.success = '';
    }, 5000);

  }
}
