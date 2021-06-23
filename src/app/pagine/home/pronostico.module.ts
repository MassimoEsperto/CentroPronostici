import { AuthGuard } from 'src/app/classi/auth-guard';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PronosticoRoutingModule } from './pronostico-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClrIconModule } from '@clr/angular';
import { ClarityModule } from "@clr/angular";
import { GestioneComponent } from './gestione-utente/gestione-utente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SideBarComponent } from './side-bar/side-bar.component';
import { InserimentoPronosticoComponent } from './inserimento-pronostico/inserimento-pronostico.component';
import { ListaPronosticiComponent } from './lista-pronostici/lista-pronostici.component';
import { ClassificaComponent } from './classifica/classifica.component';
import { TimerDataComponent } from './timer-data/timer-data.component';
import { CreaCompetizioneComponent } from './crea-competizione/crea-competizione.component';
import { MatTabsModule } from '@angular/material';
import { TabBomberComponent } from 'src/app/componenti/tab-bomber/tab-bomber.component';
import { TabSquadreComponent } from 'src/app/componenti/tab-squadre/tab-squadre.component';
import { TabAntepostComponent } from 'src/app/componenti/tab-antepost/tab-antepost.component';
import { TabCalendarioComponent } from 'src/app/componenti/tab-calendario/tab-calendario.component';
import { TabPuntiPrevistiComponent } from 'src/app/componenti/tab-punti-previsti/tab-punti-previsti.component';
import { GestioneCompetizioneComponent } from './gestione-competizione/gestione-competizione.component';
import { TabGironiComponent } from 'src/app/componenti/tab-gironi/tab-gironi.component';
import { TabRisultatiComponent } from 'src/app/componenti/tab-risultati/tab-risultati.component';
import { TabScommesseBaseComponent } from 'src/app/componenti/tab-scommesse-base/tab-scommesse-base.component';
import { TabUtentiComponent } from 'src/app/componenti/tab-utenti/tab-utenti.component';


@NgModule({
  declarations: [
    DashboardComponent,
    GestioneComponent,
    SideBarComponent,
    InserimentoPronosticoComponent,
    ListaPronosticiComponent,
    ClassificaComponent,
    TimerDataComponent,
    CreaCompetizioneComponent,
    GestioneCompetizioneComponent,
    TabBomberComponent,
    TabSquadreComponent,
    TabAntepostComponent,
    TabCalendarioComponent,
    TabPuntiPrevistiComponent,
    TabGironiComponent,
    TabRisultatiComponent,
    TabScommesseBaseComponent,
    TabUtentiComponent
  ],
  imports: [
    CommonModule,
    PronosticoRoutingModule,
    ClrIconModule,
    ClarityModule,
    FormsModule,                               // <========== Add this line!
    ReactiveFormsModule,                        // <========== Add this line!
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [AuthGuard]
})
export class PronosticoModule { }
