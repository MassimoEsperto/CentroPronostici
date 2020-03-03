import { Component, OnInit } from '@angular/core';
import { GestionePronosticiService } from 'src/app/services/gestione-pronostici.service';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string;
  punti: any;
  ngOnInit() {
    this.username = this.service.username();
    this.getPuntiPrevisti();

  }

  downloadPdf(pdfUrl: string, pdfName: string) {

    // const FileSaver = require('file-saver');
    require('file-saver').saveAs(pdfUrl, pdfName);
  }

  constructor(private service: GestionePronosticiService) { }


  getPuntiPrevisti() {

    this.service.puntiPrevisti()
      .subscribe({

        next: (result: any) => {
          this.punti = result;

        },
        error: (error: any) => {

        }
      })

  }
}
