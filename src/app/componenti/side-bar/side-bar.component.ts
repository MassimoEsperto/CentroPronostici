import { Component, OnInit } from '@angular/core';
import { GestionePronosticiService } from 'src/app/services/gestione-pronostici.service';
import { Generale } from 'src/app/classi/utils/general-component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';
import { GestioneCompetizioneService } from 'src/app/services/gestione-competizione.service';


@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent extends Generale implements OnInit {
  username: string;
  isAdmin: boolean;
  isPlayer: boolean;
  isOpen: boolean;
  dettagli: any;
  combosel: any;
  competizione:string="";

  constructor(
    private router: Router, 
    private authservice: AuthService, 
    private service: GestionePronosticiService, 
    private competizioneService: GestioneCompetizioneService, 
    private commonService: CommonService) { super() }

  ngOnInit() {
    this.isAdmin = this.service.isadmin();
    this.username = this.service.username();
    this.isPlayer = this.service.isPlayer();
    this.loading = true;
    this.getDettagli();
    this.getCombo();
  }


  getDettagli() {

    this.commonService.getDettagliCompetizione()
      .subscribe({
        next: (result: any) => {
          this.isOpen = result.isOpen;
          this.dettagli = result
          this.competizione=result.id_comp
        },
        error: (error: any) => {
        }
      })
  }

  

  logOut() {
    this.authservice.logout();
    this.router.navigate(['login']);
  }

  
  getCombo() {

    this.commonService.getCombo()
      .subscribe({

        next: (result: any) => {
          this.combosel = result;
        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })

  }

  onSelectCompetizione(element){
    this.commonService.setCompetizione(element);
    this.refreshPage();
  }
}
