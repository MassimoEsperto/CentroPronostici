import { Component, Input, OnInit } from '@angular/core';
import { Generale } from 'src/app/classi/utils/general-component';
import { GestioneCompetizioneService } from 'src/app/services/gestione-competizione.service';

@Component({
  selector: 'tab-gironi',
  templateUrl: './tab-gironi.component.html',
  styleUrls: ['./tab-gironi.component.css']
})
export class TabGironiComponent extends Generale implements OnInit {

  @Input() squadre: any;
  gironi:any;
  newSelected:any;
  
  constructor(private gestioneService: GestioneCompetizioneService) {
    super();
  }

  ngOnInit() {
    console.log("TabGironiComponent",this.squadre)
    this.getScommesseGironi()
  }

  onEditSelected(element){
console.log("onEditSelected",element)
  }

   //CRUD 
   getScommesseGironi() {

    this.resetErrors();

    this.gestioneService.getScommesseGironi()
      .subscribe({

        next: (result: any) => {

          this.gironi = result
          console.log("getScommesseGironi",result)
        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }
}
