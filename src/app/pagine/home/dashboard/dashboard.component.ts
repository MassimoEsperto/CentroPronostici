import { Component, OnInit } from '@angular/core';
import { DOMINIO_BASE } from 'src/app/classi/utils/costanti';
import { Generale } from 'src/app/classi/utils/general-component';
import { CommonService } from 'src/app/services/common.service';
import { CreaCompetizioneService } from 'src/app/services/crea-competizione.service';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends Generale implements OnInit {

  username: string;
  puntiPrevisti: any;
  dettagli: any;
  dominio: string=DOMINIO_BASE;

  ngOnInit() {
    this.username = this.competizioneService.username();
    this.getPuntiPrevisti();

  }

  downloadPdf(pdfUrl: string, pdfName: string) {

    // const FileSaver = require('file-saver');
    require('file-saver').saveAs(this.dominio+pdfUrl, pdfName);
  }

  constructor(private commonService: CommonService,
    private competizioneService: CreaCompetizioneService) {
    super();
  }


  getPuntiPrevisti() {

    this.loading=true

    this.competizioneService.getPuntiPrevisti()
      .subscribe({

        next: (result: any) => {
          this.puntiPrevisti = result;
          this.getDettagli()
        },
        error: (error: any) => {

        }
      })

  }

  getDettagli() {

    this.commonService.getDettagliCompetizione()
      .subscribe({
        next: (result: any) => {
          this.loading=false
          this.dettagli = result;
        },
        error: (error: any) => {
        }
      })
  }
}
