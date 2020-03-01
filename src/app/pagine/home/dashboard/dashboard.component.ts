import { Component, OnInit } from '@angular/core';
import { GestionePronosticiService } from 'src/app/services/gestione-pronostici.service';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  username: string;
  ngOnInit() {this.username = this.service.username()}

  downloadPdf(pdfUrl: string,pdfName: string) {
 
   // const FileSaver = require('file-saver');
    require('file-saver').saveAs(pdfUrl, pdfName);
  }

   constructor(private service: GestionePronosticiService) { }
}
