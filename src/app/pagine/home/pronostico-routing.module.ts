import { SideBarComponent } from '../../componenti/side-bar/side-bar.component';
import { GestioneComponent } from './gestione-utente/gestione-utente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from 'src/app/classi/auth-guard';
import { InserimentoPronosticoComponent } from './inserimento-pronostico/inserimento-pronostico.component';
import { ListaPronosticiComponent } from './lista-pronostici/lista-pronostici.component';
import { ClassificaComponent } from './classifica/classifica.component';
import { CreaCompetizioneComponent } from './crea-competizione/crea-competizione.component';
import { GestioneCompetizioneComponent } from './gestione-competizione/gestione-competizione.component';
import { PronosticiUtenteComponent } from './pronostici-utente/pronostici-utente.component';


const routes: Routes = [
    {
        path: 'home',
        component: SideBarComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'gestione-utente',
                component: GestioneComponent
            },
            {
                path: 'nuova-competizione',
                component: CreaCompetizioneComponent
            },
            {
                path: 'gestione-competizione',
                component: GestioneCompetizioneComponent
            },
            {
                path: 'inserimento-pronostico',
                component: InserimentoPronosticoComponent
            },
            {
                path: 'lista-pronostici',
                component: ListaPronosticiComponent
            },
            {
                path: 'pronostici-utente',
                component: PronosticiUtenteComponent
            },
            {
                path: 'classifica',
                component: ClassificaComponent
            }
           
        ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PronosticoRoutingModule { }
