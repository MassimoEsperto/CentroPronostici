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


@NgModule({
  declarations: [DashboardComponent, GestioneComponent, SideBarComponent, InserimentoPronosticoComponent, ListaPronosticiComponent, ClassificaComponent],
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
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [AuthGuard]
})
export class PronosticoModule { }
