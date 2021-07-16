import { Component, Input, OnInit } from '@angular/core';
import { Generale } from 'src/app/classi/utils/general-component';
import { GestionePronosticiService } from 'src/app/services/gestione-pronostici.service';

@Component({
  selector: 'visualizza-schede',
  templateUrl: './visualizza-schede.component.html',
  styleUrls: ['./visualizza-schede.component.css']
})
export class VisualizzaSchedeComponent extends Generale implements OnInit {

  @Input() pronostici: any = []

  scheda_selected: any = []
  viewScheda: boolean = false
  id_selected: number = 0;

  constructor(private pronosticiService: GestionePronosticiService) {
    super();
  }

  ngOnInit() { }

  onViewScheda(element) {
    this.getSchedaCompilata(element.id_schedina)
  }

  onViewList() {
    this.scheda_selected = []
    this.viewScheda = false
  }


  getSchedaCompilata(id_schedina: number) {

    this.pronosticiService.getSchedaCompilata(id_schedina.toString())
      .subscribe({

        next: (result: any) => {
          this.id_selected=id_schedina;
          this.scheda_selected = result
          this.viewScheda = true
        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })

  }

  printToCart(printSectionId: string){
    let popupWinindow
    let innerContents = document.getElementById(printSectionId).innerHTML;
    popupWinindow = window.open('#test', '_blank',  'top=0,left=0,height=100%,width=auto');
   
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="http://marescafantaeuropeo.altervista.org/archivio/css/stampaPDF.css" /></head><body onload="window.print()"><h3>Scheda numero: '+this.id_selected+'</h3>' + innerContents + '</html>');

    popupWinindow.document.close();
}
}
