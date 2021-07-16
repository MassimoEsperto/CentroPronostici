import { Component, Input, OnInit } from '@angular/core';
import { Competizione } from 'src/app/classi/model/competizione';
import { Generale } from 'src/app/classi/utils/general-component';
import { CommonService } from 'src/app/services/common.service';
import { OrganizzaService } from 'src/app/services/organizza.service';

@Component({
  selector: 'tab-competizioni',
  templateUrl: './tab-competizioni.component.html',
  styleUrls: ['./tab-competizioni.component.css']
})
export class TabCompetizioniComponent extends Generale implements OnInit {

  competizioni: any;
  isModifica: boolean = false;
  sigla = '';
  descrizione = '';
  isAttiva='';
  id_comp='';

  constructor(private organizzaService: OrganizzaService,private combo: CommonService) {
    super();
  }
  ngOnInit() {
    this.loading=true
    this.getCompetizione()
  }



  onUpdateCompetizione(sigla: string, descrizione: string,isAttiva:string) {
    let newItem: Competizione = new Competizione(this.id_comp,sigla,descrizione,isAttiva);
    this.updateCompetizione(newItem)
  }

  onAddCompetizione(sigla: string, descrizione: string) {
    let upsigla = sigla.toUpperCase().replace(/ /g, '');
    let newItem: Competizione = new Competizione('',upsigla,descrizione);
    this.addCompetizione(newItem)
  }

  openModifica(element) {
    this.isModifica = true;
    this.sigla = element.sigla
    this.descrizione = element.descrizione
    this.isAttiva = element.isAttiva
    this.id_comp=element.id_comp
  }

  closeModifica() {
    this.sigla = ''
    this.descrizione = ''
    this.isAttiva = ''
    this.isModifica = false
  }


  //CRUD 
  getCompetizione() {

    this.organizzaService.getCompetizioni()
      .subscribe({

        next: (result: any) => {
          
          this.competizioni = result;
          this.loading=false;
          this.closeModifica();

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }


  addCompetizione(input: Competizione) {

    this.resetErrors();

    this.organizzaService.insertCompetizioni(input)
      .subscribe({

        next: (result: any) => {

          this.getCompetizione()

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }


  updateCompetizione(input: Competizione) {

    this.resetErrors();

    this.organizzaService.updCompetizione(input)
      .subscribe({

        next: (result: string) => {

          this.getCompetizione()
        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }
}
