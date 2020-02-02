import { AuthGuard } from 'src/app/classi/auth-guard';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PronosticoRoutingModule } from './pronostico-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClrIconModule } from '@clr/angular';
import { ClarityModule } from "@clr/angular";
import { GestioneComponent } from './gestione/gestione.component';
import { InserimentoComponent } from './inserimento/inserimento.component';
import { VisualizzaComponent } from './visualizza/visualizza.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
  declarations: [DashboardComponent, GestioneComponent, InserimentoComponent, VisualizzaComponent, SideBarComponent],
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
