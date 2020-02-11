import { SideBarComponent } from './side-bar/side-bar.component';
import { GestioneComponent } from './gestione-utente/gestione-utente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from 'src/app/classi/auth-guard';
import { InserimentoPronosticoComponent } from './inserimento-pronostico/inserimento-pronostico.component';
import { ListaPronosticiComponent } from './lista-pronostici/lista-pronostici.component';


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
                path: 'inserimento-pronostico',
                component: InserimentoPronosticoComponent
            },
            {
                path: 'lista-pronostici',
                component: ListaPronosticiComponent
            }
           
        ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PronosticoRoutingModule { }
