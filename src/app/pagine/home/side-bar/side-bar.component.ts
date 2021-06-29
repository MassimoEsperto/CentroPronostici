import { Component, OnInit } from '@angular/core';
import { GestionePronosticiService } from 'src/app/services/gestione-pronostici.service';
import { Generale } from 'src/app/classi/utils/general-component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';

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

  constructor(private router: Router, private authservice: AuthService,private service: GestionePronosticiService,private commonService: CommonService) { super() }

  ngOnInit() {
    this.isAdmin = this.service.isadmin();
    this.username = this.service.username();
    this.isPlayer = this.service.isPlayer();
    this.loading = true;
    this.getVariabile();
  }


  getVariabile() {

    this.commonService.getOpzioni()
      .subscribe({
        next: (result: any) => {
          this.variabile = result.valore;
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

  logOut(){
    this.authservice.logout();
    this.router.navigate(['login']);
  }

}
