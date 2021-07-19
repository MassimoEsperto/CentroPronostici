import { Component, Input, OnInit } from '@angular/core';
import { Competizione } from 'src/app/classi/model/competizione';
import { SiNo } from 'src/app/classi/utils/enums';
import { Generale } from 'src/app/classi/utils/general-component';
import { CommonService } from 'src/app/services/common.service';
import { OrganizzaService } from 'src/app/services/organizza.service';

@Component({
  selector: 'competizioni',
  templateUrl: './competizioni.component.html',
  styleUrls: ['./competizioni.component.css']
})
export class CompetizioniComponent extends Generale implements OnInit {

  competizioni: any;
  isModifica: boolean = false;
  sigla = '';
  descrizione = '';
  isAttiva = '';
  id_comp = '';
  footer = '';
  scadenza = '';
  isOpen = '';

  constructor(private organizzaService: OrganizzaService, private combo: CommonService) {
    super();
  }
  ngOnInit() {
    this.loading = true
    this.getCompetizione()
  }



  onUpdateCompetizione(sigla: string, descrizione: string, isAttiva: string, footer: string, scadenza: string, isOpen: string) {
    let newItem: Competizione = new Competizione(this.id_comp, sigla, descrizione, isAttiva, footer, scadenza, isOpen);
    this.updateCompetizione(newItem)
  }

  onAddCompetizione(sigla: string, descrizione: string) {
    let upsigla = sigla.toUpperCase().replace(/ /g, '');
    let newItem: Competizione = new Competizione('', upsigla, descrizione);
    this.addCompetizione(newItem)
  }

  openModifica(element) {
    this.isModifica = true;
    this.sigla = element.sigla
    this.descrizione = element.descrizione
    this.isAttiva = element.isAttiva
    this.footer = element.footer
    this.scadenza = element.scadenza
    this.isOpen = element.isOpen
    this.id_comp = element.id_comp
  }

  closeModifica() {
    this.sigla = ''
    this.descrizione = ''
    this.isAttiva = ''
    this.footer = '';
    this.scadenza = '';
    this.isOpen = '';
    this.isModifica = false
  }

  viewSiNo(item) {
    return item == SiNo.SI_V ? SiNo.SI_S : SiNo.NO_S
  }

  //CRUD 
  getCompetizione() {

    this.organizzaService.getCompetizioni()
      .subscribe({

        next: (result: any) => {

          this.competizioni = result;
          this.loading = false;
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

