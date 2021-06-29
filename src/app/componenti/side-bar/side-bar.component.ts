import { Component, OnInit } from '@angular/core';
import { GestionePronosticiService } from 'src/app/services/gestione-pronostici.service';
import { Generale } from 'src/app/classi/utils/general-component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent extends Generale implements OnInit {
  username: string;
  isAdmin: boolean;
  isPlayer: boolean;
  variabile: boolean;
  opzioni: any;

  constructor(private router: Router, private authservice: AuthService, private service: GestionePronosticiService, private commonService: CommonService) { super() }

  ngOnInit() {
    this.isAdmin = this.service.isadmin();
    this.username = this.service.username();
    this.isPlayer = this.service.isPlayer();
    this.loading = true;
    this.getOpzioni();
  }


  getOpzioni() {

    this.commonService.getOpzioni()
      .subscribe({
        next: (result: any) => {
          this.variabile = result.valore;
          this.opzioni = result
        },
        error: (error: any) => {
        }
      })
  }

  upadateOpzioni(payload:any) {
    this.commonService.updOpzioni(payload)
    .subscribe({
      next: (result: any) => {
        this.successo()
      },
      error: (error: any) => {
      }
    })
  }


  onUpdateOpzioni(opzioni) {
    let scelta = (opzioni.valore) ? 1 : 0;
    let payload = { blocco: scelta, scadenza: opzioni.scadenza, testo: opzioni.testo }
    this.upadateOpzioni(payload)
  }

  logOut() {
    this.authservice.logout();
    this.router.navigate(['login']);
  }

}
