import { Component, OnInit } from '@angular/core';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  ngOnInit() {}

  downloadPdf(pdfUrl: string,pdfName: string) {
 
   // const FileSaver = require('file-saver');
    require('file-saver').saveAs(pdfUrl, pdfName);
  }

   constructor() { }
}
