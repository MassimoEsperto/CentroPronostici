import { Component, Input, OnInit } from '@angular/core';
import { Generale } from 'src/app/classi/utils/general-component';
import { CreaCompetizioneService } from 'src/app/services/crea-competizione.service';

@Component({
  selector: 'tab-bomber',
  templateUrl: './tab-bomber.component.html',
  styleUrls: ['./tab-bomber.component.css']
})
export class TabBomberComponent extends Generale implements OnInit {

  @Input() cannonieri: any;
  newBomber = '';

  constructor(private creaService: CreaCompetizioneService) {
    super();
  }

  ngOnInit() {
    console.log("cannonieri",this.cannonieri)
  }

   //CRUD CAPOCANNONIERE
   onAddBomber(bomber: string) {

    this.resetErrors();

    this.creaService.insertBomber(bomber)
      .subscribe({

        next: (result: string) => {

          this.cannonieri.push(result);
          this.newBomber = '';

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }

  onDeleteBomber(bomber: string) {

    this.resetErrors();

    this.creaService.deleteBomber(bomber)
      .subscribe({

        next: (result: string) => {

          const index: number = this.cannonieri.indexOf(result);
          if (index !== -1) {
            this.cannonieri.splice(index, 1);
          }


        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }
}
