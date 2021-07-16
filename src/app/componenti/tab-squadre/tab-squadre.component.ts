import { Component, Input, OnInit } from '@angular/core';
import { Generale } from 'src/app/classi/utils/general-component';
import { CreaCompetizioneService } from 'src/app/services/crea-competizione.service';

@Component({
  selector: 'tab-squadre',
  templateUrl: './tab-squadre.component.html',
  styleUrls: ['./tab-squadre.component.css']
})
export class TabSquadreComponent extends Generale implements OnInit {

  @Input() squadre: any;
  newTeam = '';
  girone = '';

  constructor(private creaService: CreaCompetizioneService) {
    super();
  }
  ngOnInit() {
  }

  //CRUD 
  onAddSquadra(nome: string, girone: string) {

    this.resetErrors();
    let gir = girone.toUpperCase()

    this.creaService.insertSquadra(nome.replace(/ /g, ''), gir)
      .subscribe({

        next: (result: any) => {

          this.squadre.push(result);
          this.newTeam = '';

        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }

  onDeleteSquadra(input: any) {

    this.resetErrors();

    this.creaService.deleteSquadra(input.nome)
      .subscribe({

        next: (result: string) => {

          const index: number = this.squadre.findIndex(i => i.nome == result);
          if (index !== -1) {
            this.squadre.splice(index, 1);
          }


        },
        error: (error: any) => {

          this.stampaErrore(error);

        }
      })
  }
}
