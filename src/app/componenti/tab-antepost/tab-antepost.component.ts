import { Component, Input, OnInit } from '@angular/core';
import { Generale } from 'src/app/classi/utils/general-component';
import { CreaCompetizioneService } from 'src/app/services/crea-competizione.service';

@Component({
  selector: 'tab-antepost',
  templateUrl: './tab-antepost.component.html',
  styleUrls: ['./tab-antepost.component.css']
})
export class TabAntepostComponent extends Generale implements OnInit {

  @Input() gironi: any;
  girone = '';
  gironiAntepost: any

  constructor(private creaService: CreaCompetizioneService) {
    super();
  }

  ngOnInit() {
    this.getAntepostGironi()
  }


  //CRUD 
  getAntepostGironi() {

    this.resetErrors();

    this.creaService.getAntepostGironi()
      .subscribe({

        next: (result: string) => {

          this.gironiAntepost = result
        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }

  onAddGirone(input: string) {

    this.resetErrors();
    let esiste: boolean = this.gironiAntepost.some(i => i.girone == input);

    if (esiste) {
      this.stampaErrore('Girone già esistente');
      return;
    }

    this.creaService.setGirone(input)
      .subscribe({

        next: (result: string) => {

          this.getAntepostGironi()
          this.girone = '';

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }

  onDelGirone(input: string) {

    this.resetErrors();

    this.creaService.delGirone(input)
      .subscribe({

        next: (result: string) => {

          this.getAntepostGironi()
          this.girone = '';

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }

}
